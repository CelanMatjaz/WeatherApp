import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { WeatherData } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  weatherDataEmitter = new Subject<WeatherData>();
}
