import { Component, OnInit } from '@angular/core';
import { WorldHappinessService } from '../services/world-happiness.service';
// import { FormGroup, FormControl } from '@angular/forms';
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
  refinedTopoJsonData: any;
  filteredData:[];
  currentYear:number =  2020;
  selectedYearData:[];
  year:number;
  width:number = window.innerWidth-window.innerWidth/3;
  height:number  = window.innerHeight-window.innerHeight/3;
  countries:[];
  capitals:any;
  filterType: boolean = true;
  plotData = {};
  filterKeyword:string = 'freedomToMakeLifeChoices';
  happynessIndexOptions = [{name: 'Freedom to make life choices',value:'freedomToMakeLifeChoices', range:[0.001, 0.999] },
                            {name: 'Healthy life expectancy at birth', value:'healthyLifeExpectancyAtBirth', range:[10, 100] },
                            {name: 'Generosity',value: 'generosity', range:[-0.001, 1.0]},
                            {name: 'Life Ladder',value: 'lifeLadder', range:[1.000, 10.000]},
                            {name: 'Negative affect',value: 'negativeAffect', range:[1.000, 10.000]},
                            {name: 'Perceptions of corruption',value: 'perceptionsOfCorruption', range:[0.10, 1]},
                            {name: 'Positive affect',value: 'positiveAffect', range:[0.10, 1]},
                            {name: 'Social support',value:'socialSupport',range:[0.10, 1]}]

  constructor(private dataService: WorldHappinessService) { }

  ngOnInit(): void {
    this.getGraphDetails();
    this.year = this.currentYear
  }

  getGraphDetails(): void{
    this.dataService.getData().subscribe(data=>{
      this.data = d3.csvParse(data);
      console.log(this.data);
    })

    this.dataService.getTopoJsonData().subscribe(data=>{
      this.topoJsonData = data;
      this.refinedTopoJsonData = JSON.parse(JSON.stringify(data));
      console.log(data);
      this.updateData();
      // this.plotMap();
    })
  }

  updateData(): void{
    this.filterTopoJSON(this.data.filter(item=>(item.year==this.year))); 
  }

  getRange(d): any{
    return this.happynessIndexOptions.find(e=>e.value==d)
  }

  filterTopoJSON(selectedYearData:[]){
    // console.log(selectedYearData);
    this.getUpdatedTopoJson(this.refinedTopoJsonData.objects.countries.geometries, selectedYearData);
  }

  // getUpdatedTopoJson(geometries: any[], syData: any[]){
  //   let refinedGeos = [];
  //   console.log(syData);
  //   syData.forEach(item=>{
  //     refinedGeos.push(geometries.filter(geos=>
  //       (geos.properties.name == item["Country name"])
  //     ));
  //   })
  //   this.plotCapitals(refinedGeos)
  //   console.log(refinedGeos)
  // }

  getUpdatedTopoJson(geometries: any[], syData: any[]){
    let refinedGeos = [];
    console.log(syData);
    syData.forEach(item=>{
      // refinedGeos.push(geometries.filter(geos=>
      //   (geos.properties.name == item["Country name"])
      // ));
      refinedGeos.push(geometries.filter(function(geos){
        if(geos.properties.name == item["Country name"]){
          geos.properties.countryName = item["Country name"];
          geos.properties.freedomToMakeLifeChoices = item["Freedom to make life choices"];
          geos.properties.generosity = item["Generosity"];
          geos.properties.healthyLifeExpectancyAtBirth = item["Healthy life expectancy at birth"];
          geos.properties.lifeLadder = item["Life Ladder"];
          geos.properties.logGDPperCapita = item["Log GDP per capita"];
          geos.properties.negativeAffect = item["Negative affect"];
          geos.properties.perceptionsOfCorruption = item["Perceptions of corruption"];
          geos.properties.positiveAffect = item["Positive affect"];
          geos.properties.region = item["Region"];
          geos.properties.socialSupport = item["Social support"];
          return geos;
        }
      }))
    })
    this.plotCapitals(refinedGeos)
    // console.log(refinedGeos)
  }

  plotCapitals(refinedGeos){
    // console.log(refinedGeos);
    console.log("plot capitals called");

    let filteredData = []
    refinedGeos.forEach(function(element){
      // console.log(element);
      if(element){
        element.forEach(item => {
          filteredData.push(item.properties);
        });
      }
    })

    console.log(filteredData);
    // this.refinedTopoJsonData = this.topoJsonData;
    d3.selectAll("#wh-map > *").remove();
    this.plotMap(filteredData)
  }

  plotMap(filteredData): void{
    const svg = d3.select('#wh-map')
      .append('svg')
      .attr('width',this.width)
      .attr('height',this.height);
    this.draw(svg, filteredData);
  }

  draw(svg, filteredData): void{
    let filter = this.filterKeyword;
    const projection = geoMercator()
    .translate([this.width / 2, this.height  / 2])
    .scale((this.width - 1) / 2 / Math.PI);

    const pathGenerator = geoPath().projection(projection);
    let path = d3.geoPath().projection(projection);
    let g = svg.append('g');
    g.attr('class', 'map'); 

    let div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

    let color = d3.scaleLinear<string,number>().domain([1,10]).range(['red','green']);

    var scale = d3.scaleLinear<number,number>().domain([ -0.0, 100 ]).range([ 2.5, 8 ]);

    this.countries = this.getCountries().features;
    
    if(this.countries.length > 0){
      // console.log(this.countries);
      svg.selectAll(".country")
      .data(this.countries)
      .enter().append("path")
      .attr("class", "country");
      g.selectAll('path').data(this.countries).enter().append('path').attr('class','country').attr('d', path)
    }

      if( filteredData.length > 0 ){
        g.selectAll("circle")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
          // console.log(d)
            if(d.lon && d.lat){
              return projection([d.lon, d.lat])[0]
            }
          })
          .attr("cy", function(d) {
            if(d.lon && d.lat){
              return projection([d.lon, d.lat])[1]
            }
          })
          .style('opacity',0.7)
          .attr("r", function(d){
            if(d[filter]){
              return scale(d[filter]);
            }
          })
          .attr("fill", function(d){
            return color(d[filter]);
          })
          .style("stroke", '#000')
          .style("stroke-width", 0.7)
          .on("mouseover", function(event,d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);
            div.html('<p>'+d.name+'<br/>'+d[filter]+'</p>')
              .style("left", (event.pageX) + "px")
              .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
              div.transition()
                .duration(500)
                .style("opacity", 0);
              });
          
          // svg.selectAll(".capital-label")
          // .data(filteredData)
          // .enter().append("text")
          // .attr("class","city-label")
          // .attr("x", function(d) {
          //   var coords = projection([d.lat,d.lon] )
          //   console.log(d);
          //   return coords[0];
          // })
          // .attr("y", function(d) {
          //   var coords = projection([d.lat,d.lon] )
          //   console.log(d);
          //   return coords[1];
          // })
          // .text(function(d){
          //   return d.name;
          // })
      }

    // }

    const zoom = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', function(event){
      g.selectAll('path')
        .attr('transform', event.transform);
        g.selectAll("circle")
        .attr('transform', event.transform);
    })

    svg.call(zoom);
  }

  getCountries():any{
    return feature(this.topoJsonData, this.topoJsonData.objects.countries);
  }

  // getCapitals():any{
  //   return feature(this.refinedTopoJsonData, this.refinedTopoJsonData.objects.countries);
  // }

}
