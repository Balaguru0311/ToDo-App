export interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
}

export interface ForecastDay {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  day: string;
  temp: number;
  humidity: number;
}
