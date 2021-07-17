import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WorldHappinessService } from '../services/world-happiness.service';
import { DataSharingService } from '../services/data-sharing.service';
import { Brand } from '../models/brand';

import * as d3 from 'd3';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-rbc',
  templateUrl: './rbc.component.html',
  styleUrls: ['./rbc.component.scss']
})
export class RbcComponent implements OnInit {
  private data: Brand[] = [];
  private endYear:number
  public filterKeyword: string = 'freedomToMakeLifeChoices';
  private countries:[];
  private keyframes:any;
  private year:any;
  private top_n = 10;
  private width: number = window.innerWidth /3.25;
  private height: number = window.innerHeight - window.innerHeight / 2.7;
  public happynessIndexOptions: Array<any>
  private HIfilter:string = "Freedom to make life choices";

  constructor(private whs: WorldHappinessService, private dataService: DataSharingService) { }

  ngOnInit(): void {
    this.happynessIndexOptions = this.dataService.getHIIndexes();
    this.getData();

  }

  // getData() {
  //   this.whs.getBrandValues().subscribe(data => { // working code
  //     this.data = d3.csvParse(data);
  //     this.draw();
  //   })
  // }

  updateData = () =>{
    this.HIfilter = this.findHIObj.name;
    this.getData()
  }

  getData = () => {
    this.whs.getData().subscribe(data => {
      this.data = d3.csvParse(data);
      console.log(this.data);
      this.formatData(this.data);
    });
  }

  formatData = (data:any) => {

    this.dataService.bs.subscribe(data=>{
      if(data){
        console.log(data);
        this.endYear = data.year;
        this.countries = data.countries;
      }else{
        this.endYear = 2020;
      }
    })  
  
    let countryGroups = d3.group(data, d => d["Country name"]);
  
    let countryNames = new Set(data.map(d => d["Country name"], d=>d[this.HIfilter]))
  
    let datevalues = Array.from(d3.rollup(data, ([d]) => d[this.HIfilter], d => d["year"], d => d["Country name"]))
    .map(([year, data]) => [year, data])
    .sort(([a], [b]) => d3.ascending(a, b))
  
    console.log(countryGroups);
    console.log(countryNames);
    console.log(datevalues);
  
    this.keyframes = this.formatKeyFrames(datevalues,countryNames);
    console.log(this.keyframes);
    this.data = this.keyframes.map(item=>item[1]).flat();
    d3.selectAll("#rbc-chart > *").remove();
    this.draw();
  }

  formatKeyFrames(datevalues, countryNames):any {
    const keyframes = [];
    // console.log(d3.pairs(datevalues));
    let ka, a, kb, b, k=10;
    // for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
      for ([ka,kb] of d3.pairs(datevalues)) {
        [ka, a] = ka;
        [kb, b] = kb;

        console.log(ka,a);
        console.log(kb,b);
      for (let i = 0; i < k; ++i) {
        const t = i / k;
        keyframes.push([
          +t + +ka,
          this.rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t, countryNames, (+t + +ka))
        ]);
      }
    }

    keyframes.push([+datevalues[datevalues.length-1][0], this.rank(name => b.get(name) || 0,countryNames,ka)]);
    return keyframes;
}

rank(value,countryNames,year):any {
  let n = 10;
  const data = Array.from(countryNames, name => ({name, value: value(name), rank:0, year:0,lastValue:0.0}));
  data.sort((a, b) => d3.descending(a.value, b.value));
  for (let i = 0; i < data.length; ++i){
    data[i].rank = Math.min(n, i);
    data[i].year = year;
    data[i].lastValue = data[i].value;
  }
  // console.log(data);
  return data;
}

  draw(): void {
    var svg = d3.select("#rbc-chart").append("svg")
      .attr("width", this.width)
      .attr("height", this.height);


    var tickDuration = 1000;

    var top_n = 10;

    const margin = {
      top: 80,
      right: 0,
      bottom: 5,
      left: 0
    };

    let barPadding = (this.height - (margin.bottom + margin.top)) / (top_n * 5);

    let title = svg.append('text')
      .attr('class', 'title')
      .attr('y', 24)
      .html('Showing top 10 countries in '+ this.HIfilter);

    // let subTitle = svg.append("text")
    //   .attr("class", "subTitle")
    //   .attr("y", 55)
    //   // .html("By Social support");

    let caption = svg.append('text')
      .attr('class', 'caption')
      .attr('x', this.width)
      .attr('y', this.height - 5)
      .style('text-anchor', 'end')

    let year = 2005;

    this.data.forEach(d => {
      d.value = d.value,
        d.lastValue = d.lastValue,
        d.value = isNaN(+d.value) ? 0 : d.value,
        d.year = +d.year,
        d.colour = d3.hsl(Math.random() * 360, 0.75, 0.75)
    });

    console.log(this.data);

    let yearSlice = this.data.filter(d => d.year == year && !isNaN(d.value))
      .sort((a, b) => b.value - a.value)
      .slice(0, top_n);

    yearSlice.forEach((d, i) => d.rank = i);

    console.log('yearSlice: ', yearSlice)

    let x = d3.scaleLinear()
      // d3.max(yearSlice, d => d.value)
      .domain([0, yearSlice[0].value])
      .range([margin.left, this.width - margin.right - 65]);

    let y = d3.scaleLinear()
      .domain([top_n, 0])
      .range([this.height - margin.bottom, margin.top]);

    let xAxis = d3.axisTop(x)
      .scale(x)
      .ticks(this.width > 500 ? 5 : 2)
      .tickSize(-(this.height - margin.top - margin.bottom))
      .tickFormat(d => d3.format(',')(d));

    svg.append('g')
      .attr('class', 'axis xAxis')
      .attr('transform', `translate(0, ${margin.top})`)
      .call(xAxis)
      .selectAll('.tick line')
      .classed('origin', d => d == 0);

    svg.selectAll('rect.bar')
      .data(yearSlice, function (d: any) {
        return d.name
      })
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', x(0) + 1)
      .attr('width', d => x(d.value) - x(0) - 1)
      .attr('y', d => y(d.rank) + 5)
      .attr('height', y(1) - y(0) - barPadding)
      .style('fill', d => d.colour);

    svg.selectAll('text.label')
      .data(yearSlice, function (d: any) {
        return d.name
      })
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => x(d.value) - 8)
      .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
      .style('text-anchor', 'end')
      .html(d => d.name);

    svg.selectAll('text.valueLabel')
      .data(yearSlice, function (d: any) {
        return d.name
      })
      .enter()
      .append('text')
      .attr('class', 'valueLabel')
      .attr('x', d => x(d.value) + 5)
      .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
      .text(function(d){
        return d.lastValue;
      })
      // .text(d => d3.format(',.0f')(d.lastValue));

    const halo = function (text, strokeWidth) {
      text.select(function () { return this.parentNode.insertBefore(this.cloneNode(true), this); })
        .style('fill', '#ffffff')
        .style('stroke', '#ffffff')
        .style('stroke-width', strokeWidth)
        .style('stroke-linejoin', 'round')
        .style('opacity', 1);

    }

    let yearText = svg.append('text')
      .attr('class', 'yearText')
      .attr('x', this.width - margin.right-20)
      .attr('y', 50)
      .style('text-anchor', 'end')
      // .html(function(d:any){
      //   console.log(d)
      //   return d.year||2020;
      // })
      .call(halo, 10);

    let ticker = d3.interval(e => {

      yearSlice = this.data.filter(d => d.year == year && !isNaN(d.value))
        .sort((a, b) => b.value - a.value)
        .slice(0, top_n);

      yearSlice.forEach((d, i) => d.rank = i);

      console.log('IntervalYear: ', yearSlice);

      x.domain([0, d3.max(yearSlice, d => d.value)]);

      svg.select('.xAxis')
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .call(xAxis as any);

      let bars = svg.selectAll('.bar').data(yearSlice, function (d: any) {
        return d.name
      });

      bars
        .enter()
        .append('rect')
        .attr('class', d => `bar ${d.name.replace(/\s/g, '_')}`)
        .attr('x', x(0) + 1)
        .attr('width', d => x(d.value) - x(0) - 1)
        .attr('y', d => y(top_n + 1) + 5)
        .attr('height', y(1) - y(0) - barPadding)
        .style('fill', d => d.colour)
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => y(d.rank) + 5);

      bars
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('width', d => x(d.value) - x(0) - 1)
        .attr('y', d => y(d.rank) + 5);

      bars
        .exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('width', function (d: any) {
          return x(d.value) - x(0) - 1
        })
        .attr('y', d => y(top_n + 1) + 5)
        .remove();

      let labels = svg.selectAll('.label')
        .data(yearSlice, function (d: any) {
          return d.name
        });

      labels
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', d => x(d.value) - 8)
        .attr('y', d => y(top_n + 1) + 5 + ((y(1) - y(0)) / 2))
        .style('text-anchor', 'end')
        .html(d => d.name)
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);


      labels
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => x(d.value) - 8)
        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);

      labels
        .exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', function (d: any) {
          return x(d.value) - 8;
        })
        .attr('y', d => y(top_n + 1) + 5)
        .remove();

      let valueLabels = svg.selectAll('.valueLabel').data(yearSlice, function (d: any) {
        return d.name
      });

      valueLabels
        .enter()
        .append('text')
        .attr('class', 'valueLabel')
        .attr('x', d => x(d.value) + 5)
        .attr('y', d => y(top_n + 1) + 5)
        .text(d => d3.format(',.0f')(d.lastValue))
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);

      valueLabels
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => x(d.value) + 5)
        .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
        .tween("text", function (d) {
          let i = d3.interpolateRound(d.lastValue, d.value);
          return function (t) {
            d3.format(',')(i(t));
            //  this.textContent = d3.format(',')(i(t));
          };
        });


      valueLabels
        .exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', function (d: any) {
          return x(d.value) + 5
        })
        .attr('y', d => y(top_n + 1) + 5)
        .remove();

      yearText.html('2020');

      if (this.year == 2020) ticker.stop();
      year = +d3.format('.1f')((+year) + 0.1);
    }, tickDuration);
  }

  findHIObj(): any {
    return this.happynessIndexOptions.find(e => e.value == this.filterKeyword)
  }


}
