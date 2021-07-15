import { Component, Input, OnInit} from '@angular/core';
import { RaceBarDataModel } from "../models/charts.model";
import { DataSharingService } from '../services/data-sharing.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private ds:DataSharingService) { }

  @Input("data") private data: RaceBarDataModel[] = [];
  @Input("startYear") private startYear: any = -1;
  // @Input("endYear") private endYear: any = -1;
  private endYear: any;
  @Input("intervale") private intervale: any = 200;

  private filterKeyword:string;
  private countries:any;

  private barsColors: string[] = [
    "#5bcbfa",
    "#b072a4",
    "#f53678",
    "#faa200",
    "#2791ff",
    "#afeabb",
    "#d6b7cc",
    "#518778",
    "#ffccc6",
    "#ce1126",
    "#37283b",
    "#d8d8d8",
    "#57f289"
  ];
  colors: any;
  private svg;
  ticker;

  top_n = 10;
  height = 600;
  width = 960;
  margin = {
    top: 80,
    right: 0,
    bottom: 5,
    left: 0
  };

  barPadding =
    (this.height - (this.margin.bottom + this.margin.top)) / (this.top_n * 5);

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();

    this.ds.bs.subscribe(data=>{
      this.endYear = data.year;
      this.filterKeyword = data.filterKeyword;
      this.countries = data.countries;
    })
  }
  
  private createSvg(): void {
    this.svg = d3
      .select("#race-chart")
      .append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`);
  }

  private createColors(): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(
        this.data.map(d => {
          return d.value.toString();
        })
      )
      .range(this.barsColors);

    this.data.forEach((d, index) => {
      (d.value = +d.value),
        (d.lastValue = +d.lastValue),
        (d.value = isNaN(d.value) ? 0 : d.value),
        (d.year = +d.year),
        (d.color = this.data[index].color);
        // console.log(d)
    });
  }
  private drawChart(): void {
    let _this = this;
    let yearSlice = this.data
      .filter(d => d.year == this.startYear && !isNaN(d.value))
      .sort((a, b) => b.value - a.value)
      .slice(0, this.top_n);

    yearSlice.forEach((d, i) => (d.rank = i));

    let x = d3
      .scaleLinear()
      .domain([0, d3.max(yearSlice, d => d.value)])
      .range([this.margin.left, this.width - this.margin.right - 65]);

    let y = d3
      .scaleLinear()
      .domain([this.top_n, 0])
      .range([this.height - this.margin.bottom, this.margin.top]);

    let xAxis = d3
      .axisTop(x)
      .scale(x)
      .ticks(this.width > 500 ? 5 : 2)
      .tickSize(-(this.height - this.margin.top - this.margin.bottom))
      .tickFormat(d => d3.format(",")(d));

    this.svg
      .append("g")
      .attr("class", "axis xAxis")
      .attr("transform", `translate(0, ${this.margin.top})`)
      .call(xAxis)
      .selectAll(".tick line")
      .classed("origin", d => d == 0);

    this.svg
      .selectAll("rect.bar")
      .data(yearSlice, d => d.name)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", x(0) + 1)
      .attr("width", d => x(d.value) - x(0) - 1)
      .attr("y", d => y(d.rank) + 5)
      .attr("height", y(1) - y(0) - 3)
      .style("fill", d => d.color);

    this.svg
      .selectAll("text.label")
      .data(yearSlice, d => d.name)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", d => x(d.value) - 8)
      .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 + 1)
      .style("text-anchor", "end")
      .html(d => d.name);

    this.svg
      .selectAll("image.image")
      .data(yearSlice, d => d.name)
      .enter()
      .append("image")
      .attr("xlink:href", d => {
        return (
          "https://dev-sitecreator-v1-serverless-s3-gallery-bucket.s3.amazonaws.com/icons/" +
          d.prevalentIncident +
          ".png"
        );
      })
      .attr("width", 35)
      .attr("height", 25)
      .attr("class", "image")
      .attr("x", d => x(d.value) - 30)
      .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 + 20)
      .style("text-anchor", "end")
      .html(d => d.name);

    this.svg
      .selectAll("text.valueLabel")
      .data(yearSlice, d => d.name)
      .enter()
      .append("text")
      .attr("class", "valueLabel")
      .attr("x", d => x(d.value) - 45)
      .attr("y", d => y(d.rank) + 15 + (y(1) - y(0)) / 2 + 1)
      .text(d => d3.format(",.0f")(d.lastValue));

    let yearText = this.svg
      .append("text")
      .attr("class", "yearText")
      .attr("x", this.width - this.margin.right)
      .attr("y", 50)
      .style("text-anchor", "end")
      .html(~~this.startYear)
      .call(this.halo, 10);

    let title = this.svg
      .append("text")
      .attr("class", "title")
      .attr("x", this.width - 550)
      .attr("y", 50)
      .style("text-anchor", "end")
      .html("Number of reported incidents")
      .call(this.halo, 10);

    this.ticker = d3.interval(e => {
      yearSlice = this.data
        .filter(d => d.year == this.startYear && !isNaN(d.value))
        .sort((a, b) => b.value - a.value)
        .slice(0, this.top_n);

      yearSlice.forEach((d, i) => (d.rank = i));
      x.domain([0, d3.max(yearSlice, d => d.value)]);

      this.svg
        .select(".xAxis")
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .call(xAxis);

      let bars = this.svg.selectAll(".bar").data(yearSlice, d => d.name);

      bars
        .enter()
        .append("rect")
        .attr("class", d => `bar ${d.name.replace(/\s/g, "_")}`)
        .attr("x", x(0) + 1)
        .attr("width", d => x(d.value) - x(0) - 1)
        .attr("y", d => y(this.top_n + 1) + 5)
        .attr("height", y(1) - y(0) - 3)
        .style("fill", d => d.color)
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("y", d => y(d.rank) + 5);

      bars
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("width", d => x(d.value) - x(0) - 1)
        .attr("y", d => y(d.rank) + 5);

      bars
        .exit()
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("width", d => x(d.value) - x(0) - 1)
        .attr("y", d => y(this.top_n + 1) + 5)
        .remove();

      let labels = this.svg.selectAll(".label").data(yearSlice, d => d.name);
      labels
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", d => x(d.value) - 45)
        .attr("y", d => y(this.top_n + 1) + 5 + (y(1) - y(0)) / 2)
        .style("text-anchor", "end")
        .html(d => d.name)
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 + 1);

      labels
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("x", d => x(d.value) - 45)
        .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 + 1);

      labels
        .exit()
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("x", d => x(d.value) - 8)
        .attr("y", d => y(this.top_n + 1) + 5)
        .remove();

      let valueLabels = this.svg
        .selectAll(".valueLabel")
        .data(yearSlice, d => d.name);

      valueLabels
        .enter()
        .append("text")
        .attr("class", "valueLabel")
        .attr("x", d => x(d.value) - 58)
        .attr("y", d => y(d.rank) + 15 + (y(1) - y(0)) / 2 + 1)
        .text(d => d3.format(",.0f")(d.lastValue))
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 + 1);

      valueLabels
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("x", d => x(d.value) - 58)
        .attr("y", d => y(d.rank) + 15 + (y(1) - y(0)) / 2 + 1)
        .tween("text", function(d) {
          let i = d3.interpolateRound(d.lastValue, d.value);
          return function(t) {
            this.textContent = d3.format(",")(i(t));
          };
        });

      valueLabels
        .exit()
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("x", d => x(d.value) + 5)
        .attr("y", d => y(this.top_n + 1) + 5)
        .remove();

      let image = this.svg.selectAll(".image").data(yearSlice, d => d.name);

      image
        .enter()
        .append("image")
        .attr("xlink:href", d => {
          return (
            "https://dev-sitecreator-v1-serverless-s3-gallery-bucket.s3.amazonaws.com/icons/" +
            d.prevalentIncident +
            ".png"
          );
        })
        .attr("width", 35)
        .attr("height", 25)
        .attr("class", "image")
        .attr("x", d => x(d.value) - 35)
        .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 - 11)
        .text(d => d3.format(",.0f")(d.lastValue))
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 + 1);

      image
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("x", d => x(d.value) - 35)
        .attr("y", d => y(d.rank) + (y(1) - y(0)) / 2 - 11)
        .tween("image", function(d) {
          let i = d3.interpolateRound(d.lastValue, d.value);
          return function(t) {
            this.textContent = d3.format(",")(i(t));
          };
        });

      image
        .exit()
        .transition()
        .duration(this.intervale)
        .ease(d3.easeLinear)
        .attr("x", d => x(d.value) - 8)
        .attr("y", d => y(this.top_n + 1) + 5)
        .remove();

      yearText.html(~~this.startYear);

      if (this.startYear == this.endYear) this.ticker.stop();
      this.startYear = d3.format(".1f")(+this.startYear + 0.1);
    }, this.intervale);
  }
  private halo(text, strokeWidth) {
    // console.log("text, strokeWidth", text, strokeWidth);
    text
      .select(function() {
        return this.parentNode.insertBefore(this.cloneNode(true), this);
      })
      .style("fill", "#ffffff")
      .style("stroke", "#ffffff")
      .style("stroke-width", strokeWidth)
      .style("stroke-linejoin", "round")
      .style("opacity", 1);
  }
  restart() {
    this.ticker.stop();
    this.svg.html("");
    this.startYear = 1999;
    this.drawChart();
  }
}
