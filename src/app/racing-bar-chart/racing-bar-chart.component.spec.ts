import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingBarChartComponent } from './racing-bar-chart.component';

describe('RacingBarChartComponent', () => {
  let component: RacingBarChartComponent;
  let fixture: ComponentFixture<RacingBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacingBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
