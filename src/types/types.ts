export interface CoordsValue {
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  daily: {
    time: number[];
    weathercode: number[];
    mappedWeathercode: { image: string; description: string }[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: number[];
    sunset: number[];
    uv_index_max: number[];
    windspeed_10m_max: number[];
  };
}
