import { Component, OnInit } from '@angular/core';
import { WorldHappinessService } from '../services/world-happiness.service';
import * as d3 from 'd3';
import { geoMercator, geoPath, json } from 'd3';
import { feature } from 'topojson-client';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})

export class GeoComponent implements OnInit {
  data:any;
  topoJsonData: any;
  year :number =  new Date().getFullYear();
  width :number = window.innerWidth-window.innerWidth/3;
  height:number  = window.innerHeight-window.innerHeight/3;

  constructor(private dataService: WorldHappinessService) { }

  ngOnInit(): void {
    this.getGraphDetails();
  }

  getGraphDetails(): void{
    this.dataService.getData().subscribe(data=>{
      this.data = d3.csvParse(data);
      console.log(this.data);
    })

    this.dataService.getTopoJsonData().subscribe(data=>{
      this.topoJsonData = data;
      console.log(data);
      this.plotMap();
    })
  }

  plotMap(): void{
    const svg = d3.select('#wh-map')
      .append('svg')
      .attr('width',this.width)
      .attr('height',this.height);

    this.draw(svg);    
  }

  draw(svg): void{
    const projection = geoMercator()
    .translate([this.width / 2, this.height  / 2])
    .scale((this.width - 1) / 2 / Math.PI);

    const pathGenerator = geoPath().projection(projection);
    let path = d3.geoPath().projection(projection);
    let g = svg.append('g');
    g.attr('class', 'map'); 

    const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', function(event){
      g.selectAll('path')
        .attr('transform', event.transform);
    });

    let countries = this.getCountries().features;
    
    if(countries.length > 0){
      svg.selectAll(".country")
      .data(countries)
      .enter().append("path")
      .attr("class", "country");
      g.selectAll('path').data(countries).enter().append('path').attr('class','country').attr('d', path)

    }

    svg.call(zoom);
  }

  getCountries():any{
    return feature(this.topoJsonData, this.topoJsonData.objects.countries);
  }

}
