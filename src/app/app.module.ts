import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { GeoComponent } from './geo/geo.component';
import { FormsModule } from '@angular/forms';
import { RacingBarChartComponent } from './racing-bar-chart/racing-bar-chart.component';
import { RbcComponent } from './rbc/rbc.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    GeoComponent,
    RacingBarChartComponent,
    RbcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
