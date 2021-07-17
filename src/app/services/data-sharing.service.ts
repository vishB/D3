import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CountryData } from '../models/country-data';
import { HIData } from '../models/hidata';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  constructor() { } 
  bs = new BehaviorSubject<CountryData>(null);

  getDataByYear(rawData:HIData[], year:number): any {
    return rawData.filter(item => item.year == year);
  }

  getDataByYearnRegion(rawData:HIData[], year:number, region:string): any {
    return rawData.filter(item => item.year == year && item.Region == region);
  }

  getHIIndexes(){
    let happinessIndexes = [{ name: 'Freedom to make life choices', value: 'freedomToMakeLifeChoices', range: [0.001, 0.999] },
                            { name: 'Generosity', value: 'generosity', range: [-0.001, 1.0] },
                            { name: 'Healthy life expectancy at birth', value: 'healthyLifeExpectancyAtBirth', range: [10, 100] },
                            { name: 'Life Ladder', value: 'lifeLadder', range: [1.000, 10.000] },
                            { name: 'Negative affect', value: 'negativeAffect', range: [1.000, 10.000] },
                            { name: 'Perceptions of corruption', value: 'perceptionsOfCorruption', range: [0.10, 1] },
                            { name: 'Positive affect', value: 'positiveAffect', range: [0.10, 1] },
                            { name: 'Social support', value: 'socialSupport', range: [0.10, 1] }
                          ]

    return happinessIndexes;
  }
}
