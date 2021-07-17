import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { WorldHappinessService } from '../services/world-happiness.service';
import { DataSharingService } from '../services/data-sharing.service';
// import { HIData } from '../models/hidata';

@Component({
  selector: 'app-racing-bar-chart',
  templateUrl: './racing-bar-chart.component.html',
  styleUrls: ['./racing-bar-chart.component.scss']
})
export class RacingBarChartComponent implements OnInit {

  private data:Array<any>;
  private endYear:number
  private filterKeyword:string;
  private countries:[];

  constructor(private whsService: WorldHappinessService, private dataService: DataSharingService) { }

  private replay:boolean
  private d3:any
  // private bars:any
  private axis:any
  private labels:any
  private ticker:any
  private keyframes:any
  private duration:any
  // private x:any
  private invalidation:any;
  private prev:any;
  private next:any;
  private tickDuration:number = 500;

  top_n = 10;
  width: number = window.innerWidth - window.innerWidth / 3;
  height: number = 830;
  margin = {
    top: 80,
    right: 0,
    bottom: 5,
    left: 0
  };

  barPadding =
    (this.height - (this.margin.bottom + this.margin.top)) / (this.top_n * 5);

  ngOnInit(): void {
    this.getData();
  }

getData = () => {
  this.whsService.getData().subscribe(data => {
    this.data = d3.csvParse(data);
    console.log(this.data);
    this.formatData(this.data);
  });
}
  
drawChart = () =>{
  let replay:any, d3:any, width:any, height:any, bars:any, axis:any, labels:any, ticker:any, keyframes:any, duration:any, x:any, invalidation:any;

  const svg = d3.create("svg")
  .attr("viewBox", [0, 0, width, height]);

  const updateBars = bars(svg);
  const updateAxis = axis(svg);
  const updateLabels = labels(svg);
  const updateTicker = ticker(svg);

  // yield svg.node();

  for (const keyframe of this.keyframes) {
    const transition = svg.transition()
        .duration(duration)
        .ease(d3.easeLinear);

    // Extract the top bar’s value.
    x.domain([0, keyframe[1][0].value]);

    updateAxis(keyframe, transition);
    updateBars(keyframe, transition);
    updateLabels(keyframe, transition);
    updateTicker(keyframe, transition);

    invalidation.then(() => svg.interrupt());
    transition.end();
    // await transition.end();
  }

}

formatData = (data:any) => {

  this.dataService.bs.subscribe(data=>{
    if(data){
      console.log(data);
      this.endYear = data.year;
      this.filterKeyword = data.filterKeyword;
      this.countries = data.countries;
    }else{
      this.endYear = 2020;
    }
  })  

  let countryGroups = d3.group(data, d => d["Country name"]);

  let countryNames = new Set(data.map(d => d["Country name"]))

  let datevalues = Array.from(d3.rollup(data, ([d]) => d["Life Ladder"], d => d["year"], d => d["Country name"]))
  .map(([year, data]) => [year, data])
  .sort(([a], [b]) => d3.ascending(a, b))

  console.log(countryGroups);
  console.log(countryNames);
  console.log(datevalues);

  this.keyframes = this.formatKeyFrames(datevalues,countryNames);
  console.log(this.keyframes);
  let nameframes = d3.groups(this.keyframes.flatMap(([, data]) => data), function(d){d => d.name});

  this.prev = new Map(nameframes.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])));
  this.next = new Map(nameframes.flatMap(([, data]) => d3.pairs(data)))
}


  formatKeyFrames(datevalues, countryNames):any {
      const keyframes = [];
      // console.log(d3.pairs(datevalues));
      let ka, a, kb, b, k=10;
      // for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
        for ([ka,kb] of d3.pairs(datevalues)) {
          [ka, a] = ka;
          [kb, b] = kb;

          console.log(ka,a,kb,b);
        for (let i = 0; i < k; ++i) {
          const t = i / k;
          keyframes.push([
            +t + +ka,
            this.rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t, countryNames)
          ]);
        }
      }

      keyframes.push([+datevalues[datevalues.length-1][0], this.rank(name => b.get(name) || 0,countryNames)]);
      return keyframes;
  }

  rank(value,countryNames):any {
    let n = 10;
    const data = Array.from(countryNames, name => ({name, value: value(name), rank:0}));
    data.sort((a, b) => d3.descending(a.value, b.value));
    for (let i = 0; i < data.length; ++i){
      data[i].rank = Math.min(n, i);
    }
    // console.log(data);
    return data;
  }


  bars(svg):any{
//     let bar = svg.append("g")
//         .attr("fill-opacity", 0.6)
//       .selectAll("rect");

//     let n =15

//     let x = d3.scaleLinear()
//     .domain([0, d3.max(yearSlice, d => d.value)])
//     .range([margin.left, width-margin.right-65]);

//  let y = d3.scaleLinear()
//     .domain([top_n, 0])
//     .range([height-margin.bottom, margin.top]);

//  let xAxis = d3.axisTop()
//     .scale(x)
//     .ticks(width > 500 ? 5:2)
//     .tickSize(-(height-margin.top-margin.bottom))
//     .tickFormat(d => d3.format(',')(d));


    
    // let color = 
  
    // return ([date, data], transition) => bar = bar
    //   .data(data.slice(0, n), d => d.name)
    //   .join(
    //     enter => enter.append("rect")
    //       .attr("fill", color)
    //       .attr("height", y.bandwidth())
    //       .attr("x", x(0))
    //       .attr("y", d => y((prev.get(d) || d).rank))
    //       .attr("width", d => x((prev.get(d) || d).value) - x(0)),
    //     update => update,
    //     exit => exit.transition(transition).remove()
    //       .attr("y", d => y((next.get(d) || d).rank))
    //       .attr("width", d => x((next.get(d) || d).value) - x(0))
    //   )
    //   .call(bar => bar.transition(transition)
    //     .attr("y", d => y(d.rank))
    //     .attr("width", d => x(d.value) - x(0)));
  }







}
