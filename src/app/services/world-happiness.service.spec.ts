import { TestBed } from '@angular/core/testing';

import { WorldHappinessService } from './world-happiness.service';

describe('WorldHappinessService', () => {
  let service: WorldHappinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldHappinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
