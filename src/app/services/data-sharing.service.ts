import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
 bs = new BehaviorSubject({year: 2, filterKeyword: '', countries:[]});

  constructor() { }
}
