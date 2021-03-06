import { Component } from '@angular/core';
// import * as dataRace from '../app/data/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-d3-app';
  data = [
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.1,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.1,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.1,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.1,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.1,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.1,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.1,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.1,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.1,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.1,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.1,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.1,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.1,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.1,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.1,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.1,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.1,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.1,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.1,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.1,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.1,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.1,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.1,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.1,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.1,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.1,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.1,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.1,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.1,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.1,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.1,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.1,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.1,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.1,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.1,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.1,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.1,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.1,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.1,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.1,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.1,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.1,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.1,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.1,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.1,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.1,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.1,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.1,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.1,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.1,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.1,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.1,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.1,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.1,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.1,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.1,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.1,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.1,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.1,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.1,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.1,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.1,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.1,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.1,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.1,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.1,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.1,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.1,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.1,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.1,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.1,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.1,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.1,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.1,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.1,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.1,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.1,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.1,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.1,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.1,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.1,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.1,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.1,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.1,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.1,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.1,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.1,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.1,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.1,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.1,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.1,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.1,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.1,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.1,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.1,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.1,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.1,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.1,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.1,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.1,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.1,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.1,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.1,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.1,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.1,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.1,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.1,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.1,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.1,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.1,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.1,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.1,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.1,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.1,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.1,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.1,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.1,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.1,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.1,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.1,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.1,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.1,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.1,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.1,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.1,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.1,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.1,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.1,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.1,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.1,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.1,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.1,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.1,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.1,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.1,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.1,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.1,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.1,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.1,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.1,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.1,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.1,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.1,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.1,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.1,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.1,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.1,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.1,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.1,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.1,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.1,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.1,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.1,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.1,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.1,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.1,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.1,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.1,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.1,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.1,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.1,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.1,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.1,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.1,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.1,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.1,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.1,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.1,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.1,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.1,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.1,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.1,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.1,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.1,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.1,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.1,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.1,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.1,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.1,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.1,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.1,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.2,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.2,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.2,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.2,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.2,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.2,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.2,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.2,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.2,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.2,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.2,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.2,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.2,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.2,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.2,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.2,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.2,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.2,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.2,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.2,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.2,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.2,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.2,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.2,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.2,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.2,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.2,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.2,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.2,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.2,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.2,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.2,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.2,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.2,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.2,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.2,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.2,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.2,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.2,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.2,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.2,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.2,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.2,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.2,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.2,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.2,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.2,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.2,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.2,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.2,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.2,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.2,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.2,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.2,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.2,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.2,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.2,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.2,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.2,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.2,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.2,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.2,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.2,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.2,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.2,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.2,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.2,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.2,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.2,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.2,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.2,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.2,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.2,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.2,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.2,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.2,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.2,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.2,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.2,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.2,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.2,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.2,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.2,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.2,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.2,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.2,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.2,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.2,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.2,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.2,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.2,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.2,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.2,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.2,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.2,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.2,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.2,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.2,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.2,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.2,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.2,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.2,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.2,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.2,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.2,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.2,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.2,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.2,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.2,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.2,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.2,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.2,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.2,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.2,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.2,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.2,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.2,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.2,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.2,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.2,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.2,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.2,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.2,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.2,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.2,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.2,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.2,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.2,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.2,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.2,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.2,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.2,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.2,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.2,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.2,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.2,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.2,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.2,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.2,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.2,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.2,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.2,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.2,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.2,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.2,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.2,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.2,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.2,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.2,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.2,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.2,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.2,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.2,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.2,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.2,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.2,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.2,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.2,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.2,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.2,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.2,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.2,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.2,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.2,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.2,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.2,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.2,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.2,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.2,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.2,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.2,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.2,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.2,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.2,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.2,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.2,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.2,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.2,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.2,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.2,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.2,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.3,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.3,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.3,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.3,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.3,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.3,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.3,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.3,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.3,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.3,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.3,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.3,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.3,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.3,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.3,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.3,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.3,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.3,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.3,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.3,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.3,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.3,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.3,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.3,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.3,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.3,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.3,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.3,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.3,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.3,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.3,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.3,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.3,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.3,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.3,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.3,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.3,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.3,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.3,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.3,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.3,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.3,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.3,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.3,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.3,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.3,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.3,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.3,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.3,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.3,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.3,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.3,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.3,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.3,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.3,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.3,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.3,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.3,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.3,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.3,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.3,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.3,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.3,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.3,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.3,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.3,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.3,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.3,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.3,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.3,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.3,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.3,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.3,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.3,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.3,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.3,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.3,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.3,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.3,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.3,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.3,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.3,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.3,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.3,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.3,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.3,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.3,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.3,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.3,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.3,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.3,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.3,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.3,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.3,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.3,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.3,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.3,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.3,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.3,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.3,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.3,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.3,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.3,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.3,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.3,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.3,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.3,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.3,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.3,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.3,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.3,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.3,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.3,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.3,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.3,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.3,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.3,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.3,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.3,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.3,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.3,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.3,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.3,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.3,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.3,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.3,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.3,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.3,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.3,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.3,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.3,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.3,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.3,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.3,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.3,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.3,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.3,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.3,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.3,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.3,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.3,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.3,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.3,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.3,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.3,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.3,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.3,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.3,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.3,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.3,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.3,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.3,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.3,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.3,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.3,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.3,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.3,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.3,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.3,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.3,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.3,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.3,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.3,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.3,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.3,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.3,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.3,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.3,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.3,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.3,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.3,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.3,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.3,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.3,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.3,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.3,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.3,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.3,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.3,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.3,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.3,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.4,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.4,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.4,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.4,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.4,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.4,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.4,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.4,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.4,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.4,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.4,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.4,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.4,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.4,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.4,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.4,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.4,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.4,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.4,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.4,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.4,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.4,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.4,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.4,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.4,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.4,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.4,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.4,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.4,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.4,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.4,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.4,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.4,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.4,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.4,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.4,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.4,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.4,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.4,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.4,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.4,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.4,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.4,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.4,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.4,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.4,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.4,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.4,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.4,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.4,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.4,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.4,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.4,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.4,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.4,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.4,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.4,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.4,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.4,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.4,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.4,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.4,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.4,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.4,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.4,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.4,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.4,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.4,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.4,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.4,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.4,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.4,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.4,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.4,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.4,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.4,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.4,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.4,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.4,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.4,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.4,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.4,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.4,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.4,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.4,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.4,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.4,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.4,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.4,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.4,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.4,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.4,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.4,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.4,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.4,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.4,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.4,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.4,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.4,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.4,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.4,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.4,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.4,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.4,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.4,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.4,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.4,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.4,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.4,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.4,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.4,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.4,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.4,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.4,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.4,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.4,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.4,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.4,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.4,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.4,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.4,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.4,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.4,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.4,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.4,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.4,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.4,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.4,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.4,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.4,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.4,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.4,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.4,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.4,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.4,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.4,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.4,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.4,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.4,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.4,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.4,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.4,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.4,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.4,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.4,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.4,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.4,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.4,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.4,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.4,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.4,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.4,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.4,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.4,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.4,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.4,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.4,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.4,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.4,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.4,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.4,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.4,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.4,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.4,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.4,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.4,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.4,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.4,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.4,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.4,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.4,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.4,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.4,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.4,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.4,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.4,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.4,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.4,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.4,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.4,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.4,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.5,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.5,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.5,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.5,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.5,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.5,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.5,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.5,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.5,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.5,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.5,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.5,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.5,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.5,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.5,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.5,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.5,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.5,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.5,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.5,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.5,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.5,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.5,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.5,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.5,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.5,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.5,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.5,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.5,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.5,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.5,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.5,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.5,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.5,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.5,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.5,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.5,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.5,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.5,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.5,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.5,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.5,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.5,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.5,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.5,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.5,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.5,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.5,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.5,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.5,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.5,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.5,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.5,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.5,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.5,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.5,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.5,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.5,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.5,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.5,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.5,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.5,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.5,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.5,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.5,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.5,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.5,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.5,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.5,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.5,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.5,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.5,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.5,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.5,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.5,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.5,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.5,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.5,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.5,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.5,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.5,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.5,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.5,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.5,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.5,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.5,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.5,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.5,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.5,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.5,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.5,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.5,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.5,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.5,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.5,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.5,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.5,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.5,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.5,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.5,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.5,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.5,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.5,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.5,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.5,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.5,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.5,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.5,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.5,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.5,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.5,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.5,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.5,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.5,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.5,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.5,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.5,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.5,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.5,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.5,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.5,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.5,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.5,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.5,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.5,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.5,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.5,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.5,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.5,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.5,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.5,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.5,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.5,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.5,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.5,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.5,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.5,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.5,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.5,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.5,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.5,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.5,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.5,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.5,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.5,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.5,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.5,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.5,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.5,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.5,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.5,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.5,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.5,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.5,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.5,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.5,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.5,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.5,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.5,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.5,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.5,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.5,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.5,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.5,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.5,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.5,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.5,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.5,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.5,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.5,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.5,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.5,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.5,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.5,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.5,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.5,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.5,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.5,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.5,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.5,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.5,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.6,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.6,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.6,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.6,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.6,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.6,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.6,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.6,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.6,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.6,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.6,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.6,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.6,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.6,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.6,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.6,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.6,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.6,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.6,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.6,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.6,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.6,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.6,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.6,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.6,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.6,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.6,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.6,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.6,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.6,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.6,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.6,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.6,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.6,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.6,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.6,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.6,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.6,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.6,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.6,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.6,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.6,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.6,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.6,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.6,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.6,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.6,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.6,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.6,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.6,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.6,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.6,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.6,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.6,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.6,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.6,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.6,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.6,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.6,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.6,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.6,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.6,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.6,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.6,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.6,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.6,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.6,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.6,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.6,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.6,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.6,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.6,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.6,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.6,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.6,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.6,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.6,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.6,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.6,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.6,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.6,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.6,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.6,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.6,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.6,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.6,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.6,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.6,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.6,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.6,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.6,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.6,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.6,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.6,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.6,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.6,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.6,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.6,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.6,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.6,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.6,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.6,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.6,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.6,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.6,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.6,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.6,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.6,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.6,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.6,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.6,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.6,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.6,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.6,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.6,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.6,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.6,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.6,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.6,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.6,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.6,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.6,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.6,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.6,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.6,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.6,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.6,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.6,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.6,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.6,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.6,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.6,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.6,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.6,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.6,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.6,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.6,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.6,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.6,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.6,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.6,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.6,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.6,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.6,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.6,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.6,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.6,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.6,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.6,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.6,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.6,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.6,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.6,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.6,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.6,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.6,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.6,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.6,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.6,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.6,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.6,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.6,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.6,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.6,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.6,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.6,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.6,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.6,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.6,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.6,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.6,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.6,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.6,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.6,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.6,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.6,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.6,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.6,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.6,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.6,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.6,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.7,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.7,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.7,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.7,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.7,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.7,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.7,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.7,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.7,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.7,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.7,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.7,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.7,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.7,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.7,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.7,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.7,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.7,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.7,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.7,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.7,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.7,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.7,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.7,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.7,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.7,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.7,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.7,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.7,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.7,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.7,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.7,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.7,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.7,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.7,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.7,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.7,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.7,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.7,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.7,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.7,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.7,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.7,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.7,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.7,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.7,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.7,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.7,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.7,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.7,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.7,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.7,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.7,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.7,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.7,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.7,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.7,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.7,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.7,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.7,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.7,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.7,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.7,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.7,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.7,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.7,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.7,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.7,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.7,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.7,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.7,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.7,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.7,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.7,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.7,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.7,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.7,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.7,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.7,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.7,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.7,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.7,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.7,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.7,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.7,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.7,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.7,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.7,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.7,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.7,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.7,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.7,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.7,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.7,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.7,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.7,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.7,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.7,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.7,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.7,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.7,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.7,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.7,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.7,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.7,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.7,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.7,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.7,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.7,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.7,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.7,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.7,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.7,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.7,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.7,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.7,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.7,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.7,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.7,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.7,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.7,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.7,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.7,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.7,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.7,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.7,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.7,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.7,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.7,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.7,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.7,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.7,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.7,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.7,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.7,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.7,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.7,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.7,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.7,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.7,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.7,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.7,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.7,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.7,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.7,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.7,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.7,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.7,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.7,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.7,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.7,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.7,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.7,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.7,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.7,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.7,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.7,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.7,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.7,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.7,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.7,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.7,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.7,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.7,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.7,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.7,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.7,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.7,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.7,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.7,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.7,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.7,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.7,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.7,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.7,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.7,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.7,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.7,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.7,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.7,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.7,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.8,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.8,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.8,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.8,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.8,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.8,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.8,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.8,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.8,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.8,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.8,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.8,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.8,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.8,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.8,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.8,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.8,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.8,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.8,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.8,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.8,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.8,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.8,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.8,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.8,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.8,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.8,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.8,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.8,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.8,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.8,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.8,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.8,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.8,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.8,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.8,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.8,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.8,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.8,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.8,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.8,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.8,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.8,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.8,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.8,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.8,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.8,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.8,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.8,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.8,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.8,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.8,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.8,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.8,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.8,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.8,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.8,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.8,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.8,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.8,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.8,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.8,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.8,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.8,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.8,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.8,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.8,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.8,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.8,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.8,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.8,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.8,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.8,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.8,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.8,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.8,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.8,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.8,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.8,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.8,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.8,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.8,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.8,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.8,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.8,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.8,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.8,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.8,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.8,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.8,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.8,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.8,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.8,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.8,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.8,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.8,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.8,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.8,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.8,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.8,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.8,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.8,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.8,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.8,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.8,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.8,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.8,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.8,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.8,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.8,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.8,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.8,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.8,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.8,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.8,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.8,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.8,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.8,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.8,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.8,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.8,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.8,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.8,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.8,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.8,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.8,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.8,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.8,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.8,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.8,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.8,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.8,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.8,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.8,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.8,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.8,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.8,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.8,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.8,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.8,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.8,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.8,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.8,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.8,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.8,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.8,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.8,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.8,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.8,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.8,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.8,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.8,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.8,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.8,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.8,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.8,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.8,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.8,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.8,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.8,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.8,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.8,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.8,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.8,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.8,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.8,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.8,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.8,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.8,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.8,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.8,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.8,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.8,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.8,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.8,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.8,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.8,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.8,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.8,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.8,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.8,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Indian River",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Volusia",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Seminole",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - St. Lucie",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Palm Beach",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Orange",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Okeechobee",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 2,
            "year": 1999.9,
            "lastValue": 2,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 5,
            "year": 2000.9,
            "lastValue": 5,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Brevard",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Flagler",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Polk",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Broward",
            "value": 4,
            "year": 2000.9,
            "lastValue": 4,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 15,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 3,
            "year": 2000.9,
            "lastValue": 3,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2001.9,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 2,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Oklahoma - Jefferson",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Orange",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 6,
            "year": 2001.9,
            "lastValue": 6,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - White",
            "value": 8,
            "year": 2002.9,
            "lastValue": 8,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Florida - Collier",
            "value": 8,
            "year": 2002.9,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Prairie",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 5,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 6,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Little River",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Lincoln",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 8,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 9,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Arkansas - Franklin",
            "value": 7,
            "year": 2002.9,
            "lastValue": 7,
            "rank": 10,
            "prevalentIncident": "flood",
            "occurence": 2,
            "color": "#80ada0"
        },
        {
            "name": "Arkansas - White",
            "value": 9,
            "year": 2003.9,
            "lastValue": 9,
            "rank": 1,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Lawrence",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Poinsett",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 3,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "New york - Sullivan",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "New york - Schenectady",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "Kentucky - Floyd",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 5,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Arkansas - Jackson",
            "value": 8,
            "year": 2003.9,
            "lastValue": 8,
            "rank": 10,
            "prevalentIncident": "hurricane",
            "occurence": 1,
            "color": "#7ba1c7"
        },
        {
            "name": "California - Riverside",
            "value": 13,
            "year": 2004.9,
            "lastValue": 13,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 12,
            "year": 2004.9,
            "lastValue": 12,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 11,
            "year": 2004.9,
            "lastValue": 11,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 11,
            "year": 2004.9,
            "lastValue": 11,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 11,
            "year": 2004.9,
            "lastValue": 11,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 10,
            "year": 2004.9,
            "lastValue": 10,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "New york - Oneida",
            "value": 10,
            "year": 2004.9,
            "lastValue": 10,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Highlands",
            "value": 10,
            "year": 2004.9,
            "lastValue": 10,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Manatee",
            "value": 10,
            "year": 2004.9,
            "lastValue": 10,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Osceola",
            "value": 10,
            "year": 2004.9,
            "lastValue": 10,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 16,
            "year": 2005.9,
            "lastValue": 16,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2005.9,
            "lastValue": 15,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2005.9,
            "lastValue": 14,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2005.9,
            "lastValue": 13,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Monroe",
            "value": 13,
            "year": 2005.9,
            "lastValue": 13,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 12,
            "year": 2005.9,
            "lastValue": 12,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Maine - Oxford",
            "value": 12,
            "year": 2005.9,
            "lastValue": 12,
            "rank": 7,
            "prevalentIncident": "hurricane",
            "occurence": 2,
            "color": "#7ba1c7"
        },
        {
            "name": "California - San Bernardino",
            "value": 12,
            "year": 2005.9,
            "lastValue": 12,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 12,
            "year": 2005.9,
            "lastValue": 12,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Sarasota",
            "value": 12,
            "year": 2005.9,
            "lastValue": 12,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 19,
            "year": 2006.9,
            "lastValue": 19,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 16,
            "year": 2006.9,
            "lastValue": 16,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Collier",
            "value": 15,
            "year": 2006.9,
            "lastValue": 15,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 14,
            "year": 2006.9,
            "lastValue": 14,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "New york - Sullivan",
            "value": 14,
            "year": 2006.9,
            "lastValue": 14,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "New york - Delaware",
            "value": 13,
            "year": 2006.9,
            "lastValue": 13,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 13,
            "year": 2006.9,
            "lastValue": 13,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "New york - Chenango",
            "value": 13,
            "year": 2006.9,
            "lastValue": 13,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 1,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 13,
            "year": 2006.9,
            "lastValue": 13,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Florida - Miami-Dade",
            "value": 13,
            "year": 2006.9,
            "lastValue": 13,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 2,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 23,
            "year": 2007.9,
            "lastValue": 23,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 22,
            "year": 2007.9,
            "lastValue": 22,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 20,
            "year": 2007.9,
            "lastValue": 20,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 19,
            "year": 2007.9,
            "lastValue": 19,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 18,
            "year": 2007.9,
            "lastValue": 18,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 18,
            "year": 2007.9,
            "lastValue": 18,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 18,
            "year": 2007.9,
            "lastValue": 18,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Garvin",
            "value": 17,
            "year": 2007.9,
            "lastValue": 17,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 17,
            "year": 2007.9,
            "lastValue": 17,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 17,
            "year": 2007.9,
            "lastValue": 17,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 31,
            "year": 2008.9,
            "lastValue": 31,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2008.9,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2008.9,
            "lastValue": 22,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 21,
            "year": 2008.9,
            "lastValue": 21,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 21,
            "year": 2008.9,
            "lastValue": 21,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 21,
            "year": 2008.9,
            "lastValue": 21,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 20,
            "year": 2008.9,
            "lastValue": 20,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 19,
            "year": 2008.9,
            "lastValue": 19,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 19,
            "year": 2008.9,
            "lastValue": 19,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 19,
            "year": 2008.9,
            "lastValue": 19,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 33,
            "year": 2009.9,
            "lastValue": 33,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 26,
            "year": 2009.9,
            "lastValue": 26,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 24,
            "year": 2009.9,
            "lastValue": 24,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 23,
            "year": 2009.9,
            "lastValue": 23,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 23,
            "year": 2009.9,
            "lastValue": 23,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 22,
            "year": 2009.9,
            "lastValue": 22,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 22,
            "year": 2009.9,
            "lastValue": 22,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 22,
            "year": 2009.9,
            "lastValue": 22,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McIntosh",
            "value": 20,
            "year": 2009.9,
            "lastValue": 20,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 10,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 20,
            "year": 2009.9,
            "lastValue": 20,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2010.9,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 28,
            "year": 2010.9,
            "lastValue": 28,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 26,
            "year": 2010.9,
            "lastValue": 26,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 26,
            "year": 2010.9,
            "lastValue": 26,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 25,
            "year": 2010.9,
            "lastValue": 25,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 25,
            "year": 2010.9,
            "lastValue": 25,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 24,
            "year": 2010.9,
            "lastValue": 24,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 23,
            "year": 2010.9,
            "lastValue": 23,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Seminole",
            "value": 23,
            "year": 2010.9,
            "lastValue": 23,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 23,
            "year": 2010.9,
            "lastValue": 23,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2011.9,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 33,
            "year": 2011.9,
            "lastValue": 33,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2011.9,
            "lastValue": 29,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2011.9,
            "lastValue": 28,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 28,
            "year": 2011.9,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2011.9,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2011.9,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2011.9,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2011.9,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Logan",
            "value": 25,
            "year": 2011.9,
            "lastValue": 25,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 35,
            "year": 2012.9,
            "lastValue": 35,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 34,
            "year": 2012.9,
            "lastValue": 34,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2012.9,
            "lastValue": 31,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 29,
            "year": 2012.9,
            "lastValue": 29,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2012.9,
            "lastValue": 28,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 28,
            "year": 2012.9,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 27,
            "year": 2012.9,
            "lastValue": 27,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 26,
            "year": 2012.9,
            "lastValue": 26,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 26,
            "year": 2012.9,
            "lastValue": 26,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 26,
            "year": 2012.9,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 36,
            "year": 2013.9,
            "lastValue": 36,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2013.9,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2013.9,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2013.9,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2013.9,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2013.9,
            "lastValue": 28,
            "rank": 6,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2013.9,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2013.9,
            "lastValue": 27,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2013.9,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 26,
            "year": 2013.9,
            "lastValue": 26,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2014.9,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 35,
            "year": 2014.9,
            "lastValue": 35,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2014.9,
            "lastValue": 32,
            "rank": 3,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 31,
            "year": 2014.9,
            "lastValue": 31,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 29,
            "year": 2014.9,
            "lastValue": 29,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 29,
            "year": 2014.9,
            "lastValue": 29,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 28,
            "year": 2014.9,
            "lastValue": 28,
            "rank": 7,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 28,
            "year": 2014.9,
            "lastValue": 28,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Cleveland",
            "value": 27,
            "year": 2014.9,
            "lastValue": 27,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 9,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Pottawatomie",
            "value": 27,
            "year": 2014.9,
            "lastValue": 27,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 7,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 37,
            "year": 2015.9,
            "lastValue": 37,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2015.9,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 34,
            "year": 2015.9,
            "lastValue": 34,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 32,
            "year": 2015.9,
            "lastValue": 32,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2015.9,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2015.9,
            "lastValue": 30,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 30,
            "year": 2015.9,
            "lastValue": 30,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 29,
            "year": 2015.9,
            "lastValue": 29,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 29,
            "year": 2015.9,
            "lastValue": 29,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 28,
            "year": 2015.9,
            "lastValue": 28,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 41,
            "year": 2016.9,
            "lastValue": 41,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2016.9,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 35,
            "year": 2016.9,
            "lastValue": 35,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2016.9,
            "lastValue": 33,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 32,
            "year": 2016.9,
            "lastValue": 32,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 31,
            "year": 2016.9,
            "lastValue": 31,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 31,
            "year": 2016.9,
            "lastValue": 31,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2016.9,
            "lastValue": 31,
            "rank": 8,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2016.9,
            "lastValue": 30,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Grady",
            "value": 29,
            "year": 2016.9,
            "lastValue": 29,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 3,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 48,
            "year": 2017.9,
            "lastValue": 48,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2017.9,
            "lastValue": 37,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 36,
            "year": 2017.9,
            "lastValue": 36,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - Riverside",
            "value": 36,
            "year": 2017.9,
            "lastValue": 36,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2017.9,
            "lastValue": 33,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 32,
            "year": 2017.9,
            "lastValue": 32,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2017.9,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2017.9,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2017.9,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 30,
            "year": 2017.9,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 52,
            "year": 2018.9,
            "lastValue": 52,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 38,
            "year": 2018.9,
            "lastValue": 38,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2018.9,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2018.9,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2018.9,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 33,
            "year": 2018.9,
            "lastValue": 33,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 32,
            "year": 2018.9,
            "lastValue": 32,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 32,
            "year": 2018.9,
            "lastValue": 32,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 31,
            "year": 2018.9,
            "lastValue": 31,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - McClain",
            "value": 30,
            "year": 2018.9,
            "lastValue": 30,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 8,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 55,
            "year": 2019.9,
            "lastValue": 55,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 41,
            "year": 2019.9,
            "lastValue": 41,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 37,
            "year": 2019.9,
            "lastValue": 37,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2019.9,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2019.9,
            "lastValue": 34,
            "rank": 5,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2019.9,
            "lastValue": 34,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - San Diego",
            "value": 34,
            "year": 2019.9,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2019.9,
            "lastValue": 33,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 33,
            "year": 2019.9,
            "lastValue": 33,
            "rank": 9,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Okmulgee",
            "value": 32,
            "year": 2019.9,
            "lastValue": 32,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "California - Los Angeles",
            "value": 57,
            "year": 2020.9,
            "lastValue": 57,
            "rank": 1,
            "prevalentIncident": "fire",
            "occurence": 61,
            "color": "#ff9025"
        },
        {
            "name": "California - Riverside",
            "value": 43,
            "year": 2020.9,
            "lastValue": 43,
            "rank": 2,
            "prevalentIncident": "fire",
            "occurence": 38,
            "color": "#ff9025"
        },
        {
            "name": "Washington - Chelan",
            "value": 38,
            "year": 2020.9,
            "lastValue": 38,
            "rank": 3,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "Oklahoma - Oklahoma",
            "value": 37,
            "year": 2020.9,
            "lastValue": 37,
            "rank": 4,
            "prevalentIncident": "fire",
            "occurence": 18,
            "color": "#ff9025"
        },
        {
            "name": "California - San Bernardino",
            "value": 37,
            "year": 2020.9,
            "lastValue": 37,
            "rank": 5,
            "prevalentIncident": "earthquake",
            "occurence": 1,
            "color": "#cfb870"
        },
        {
            "name": "California - San Diego",
            "value": 35,
            "year": 2020.9,
            "lastValue": 35,
            "rank": 6,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Creek",
            "value": 34,
            "year": 2020.9,
            "lastValue": 34,
            "rank": 7,
            "prevalentIncident": "fire",
            "occurence": 19,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Okfuskee",
            "value": 34,
            "year": 2020.9,
            "lastValue": 34,
            "rank": 8,
            "prevalentIncident": "fire",
            "occurence": 4,
            "color": "#ff9025"
        },
        {
            "name": "Nevada - Washoe",
            "value": 34,
            "year": 2020.9,
            "lastValue": 34,
            "rank": 9,
            "prevalentIncident": "fire",
            "occurence": 33,
            "color": "#ff9025"
        },
        {
            "name": "Oklahoma - Caddo",
            "value": 33,
            "year": 2020.9,
            "lastValue": 33,
            "rank": 10,
            "prevalentIncident": "fire",
            "occurence": 6,
            "color": "#ff9025"
        }
    ]
}

