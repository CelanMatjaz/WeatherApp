import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoordsValue, WeatherData } from 'src/types/types';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { mapCodeToImageLink } from './weatherCodesMap';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  data?: WeatherData = undefined;
  latitude = 46.55;
  longitude = 15.65;
  errorText = '';

  constructor(
    private httpClient: HttpClient,
    private weatherDataService: WeatherDataService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const { latitude, longitude } = this;

    const req = this.httpClient.get<WeatherData>(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`
    );

    this.errorText = '';

    req.subscribe({
      next: (data) => {
        data.daily.mappedWeathercode =
          data.daily.weathercode.map(mapCodeToImageLink);
        this.weatherDataService.weatherDataEmitter.next(data);
      },
      error: (err) => {
        this.errorText = err.error.reason || 'Error while fetching data';
      },
    });
  }

  submitCoords(): void {
    this.fetchData();
  }
}
