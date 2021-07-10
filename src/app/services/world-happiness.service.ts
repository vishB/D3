import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class WorldHappinessService {

  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get('assets/world-happiness-report.csv', {responseType: 'text'});
  }

  getTopoJsonData(): any {
    return this.http.get('assets/world.topojson');
  }
}