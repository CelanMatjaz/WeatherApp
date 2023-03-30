import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-app/weather/weather.component';
import { WeatherDataComponent } from './weather-app/weather-data/weather-data.component';

@NgModule({
  declarations: [AppComponent, WeatherComponent, WeatherDataComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
