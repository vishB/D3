import { Component, OnInit } from '@angular/core';
import { WorldHappinessService } from '../services/world-happiness.service';
import * as d3 from 'd3';
import { geoMercator, geoPath, json } from 'd3';
import { feature } from 'topojson-client';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})

export class GeoComponent implements OnInit {
  data: any;
  topoJsonData: any;
  refinedTopoJsonData: any;
  barData: any;
  filteredData: [];
  currentYear: any = 2020;
  selectedYearData: [];
  year: number;
  width: number = window.innerWidth - window.innerWidth / 3;
  height: number = window.innerHeight - window.innerHeight / 3;
  countries: [];
  capitals: any;
  filterType: boolean = true;
  plotData = {};
  filterKeyword: string = 'logGDPperCapita';
  regionFilterKeyword: string = 'All';
  topTenRecords: any;
  allCountries:[];
  happynessIndexOptions: Array<any>
  regionList = ["Africa", "Arab States", "Asia & Pacific", "Europe", "Middle east", "North America", "South/Latin America"];
  
  constructor(private dataService: WorldHappinessService, private ds:DataSharingService) { }

  ngOnInit(): void {
    this.happynessIndexOptions = this.ds.getHIIndexes();
    this.getGraphDetails();
    this.year = this.currentYear;
  }

  getGraphDetails(): void {
    this.getHIReports();
  }

  getHIReports(): void {
    this.dataService.getData().subscribe(data => {
      this.data = d3.csvParse(data);
      this.getPlotMapInfo();
    });

    this.dataService.getBrandValues().subscribe(data => {
      this.barData = d3.csvParse(data);
      this.getPlotMapInfo();
    });
  }

  getPlotMapInfo(): boolean {
    return this.dataService.getTopoJsonData().subscribe(data => {
      this.topoJsonData = data;
      this.refinedTopoJsonData = JSON.parse(JSON.stringify(data));
      console.log(this.topoJsonData);
      this.checkGDP();
    });
  }

  checkGDP(): void {
    console.log('filterType', this.filterType)
    if (this.filterType && !this.happynessIndexOptions.some(e => e.value == 'logGDPperCapita')) {
      let GDPObject = { name: 'Log GDP per capita', value: 'logGDPperCapita', range: [1.00, 12.00] };
      this.happynessIndexOptions.push(GDPObject);
      this.filterKeyword = GDPObject.value;
    } else if(!this.filterType && this.happynessIndexOptions.some(e => e.value == 'logGDPperCapita')){
      this.happynessIndexOptions.pop();
      this.filterKeyword = 'lifeLadder';
    }
    console.log(this.happynessIndexOptions);
    this.updateData()
  }

  updateData(): void {
    if (this.regionFilterKeyword == 'All') {
      this.filterTopoJSON(this.ds.getDataByYear(this.data,this.year));
    } else {
      this.filterTopoJSON(this.data.filter(item => (item.year == this.year && item.Region == this.regionFilterKeyword)));
    }
  }

  filterTopoJSON(selectedYearData: []) {
    this.getUpdatedTopoJson(this.refinedTopoJsonData.objects.countries.geometries, selectedYearData);
  }

  getUpdatedTopoJson(geometries: any[], syData: []) {
    let refinedGeos = [];
    console.log(syData);

    this.fetchTopTen(syData);
    this.allCountries = syData;
    this.ds.bs.next({year: this.year, filterKeyword: this.filterKeyword, countries:this.allCountries });

    syData.forEach(item => {
      refinedGeos.push(geometries.filter(function (geos) {
        if (geos.properties.name == item["Country name"]) {
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
  }

  fetchTopTen = (syData) => {
    let filterCriteria = this.findHIObj();
    this.topTenRecords = syData.sort(function (a, b) {
      return a[filterCriteria.name].localeCompare(b[filterCriteria.name])
    }).slice(0, 10).reverse();
  }

  plotCapitals(refinedGeos) {
    let filteredData = []
    refinedGeos.forEach(function (element) {
      if (element) {
        element.forEach(item => {
          filteredData.push(item.properties);
        });
      }
    })

    d3.selectAll("#wh-map > *").remove();
    this.plotMap(filteredData)
  }

  plotMap(filteredData): void {
    const svg = d3.select('#wh-map')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
    this.draw(svg, filteredData);
  }

  draw(svg, filteredData): void {
    let filter = this.filterKeyword;
    const projection = geoMercator()
      .translate([this.width / 2, this.height / 2])
      .scale(this.width / 3 / Math.PI)
      // .scale((this.width - 1) / 2 / Math.PI)
      .center([65, 40]);

    const pathGenerator = geoPath().projection(projection);
    let path = d3.geoPath().projection(projection);
    let g = svg.append('g');
    g.attr('class', 'map');

    let div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    let color = d3.scaleLinear<string, number>().domain(this.getRange()).range(['#ff0000', '#00ff00']);
    let scale = d3.scaleLinear<number, number>().domain(this.getRange()).range([2.5, 6]);
    let opacScale = d3.scaleLinear<number, number>().domain(this.getRange()).range([0.7, 1]);

    this.countries = this.getCountries().features;

    if (this.countries.length > 0) { //plotting geo map
      g.selectAll('path')
        .data(this.countries)
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path)
    }

    if (filteredData.length > 0) { // adding markers and effects
      g.selectAll("circle")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
          if (d.lon && d.lat) {
            return projection([d.lon, d.lat])[0]
          }
        })
        .attr("cy", function (d) {
          if (d.lon && d.lat) {
            return projection([d.lon, d.lat])[1]
          }
        })
        .style('opacity', function (d) {
          if (d[filter]) {
            return opacScale(d[filter]);
          }
        })
        .attr("r", function (d) {
          if (d[filter]) {
            return scale(d[filter]);
          }
        })
        .attr("fill", function (d) {
          return color(d[filter]);
        })
        .style("stroke", '#e8f5eb')
        .style("stroke-width", 0.5)
        .on("mouseover", function (event, d) {
          d3.select(this).transition().duration(100)
            .attr("r", 8);
          div.transition()
            .duration(200)
            .style("opacity", .9);
          div.html('<p>' + d.name + ' (' + d[filter] + ')' + '</p>')
            .style("left", (event.pageX) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
          div.transition()
            .duration(500)
            .style("opacity", 0);
          d3.select(this).transition()
            .duration(200)
            .attr("r", function (d) {
              return scale(d[filter])
            });
        });
    }

    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on('zoom', function (event) {
        g.selectAll('path')
          .attr('transform', event.transform);
        g.selectAll("circle")
          .attr('transform', event.transform);
      })

    svg.call(zoom);
  }

  getCountries(): any {
    return feature(this.topoJsonData, this.topoJsonData.objects.countries);
  }

  findHIObj(): any {
    return this.happynessIndexOptions.find(e => e.value == this.filterKeyword)
  }

  getRange(): any {
    let rangeObj = this.findHIObj();
    return rangeObj.range;
  }





}
