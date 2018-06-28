import { Component } from '@angular/core'

import { WeatherService } from './weather/weather.service'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>LocalCast WeatherService</span>
    </mat-toolbar>
    <div fxLayoutAlign="center">
      <div class="mat-caption vertical-margin">Your city, your forcast, right now!</div>
    </div>
    <div fxLayoutAlign="center">
      <app-city-search></app-city-search>
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <mat-card fxFlex="300px">
        <mat-card-header class="mat-typography">
          <mat-card-title><div class="mat-headline">Current Weather</div></mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <app-current-weather></app-current-weather>
        </mat-card-content>
    </mat-card>
    <div fxFlex></div>
    </div>
  `,
})
export class AppComponent {
  title = 'app'
}
