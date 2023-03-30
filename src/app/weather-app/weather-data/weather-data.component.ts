import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherDataService } from 'src/app/services/weather-data.service';

import { WeatherData } from 'src/types/types';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent implements OnInit, OnDestroy {
  data?: WeatherData;
  sub?: Subscription;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.sub = this.weatherDataService.weatherDataEmitter.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
