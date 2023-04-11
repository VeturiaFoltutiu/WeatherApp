import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { CurrentWeather } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  cityName = 'Oradea';
  currentWeather?: CurrentWeather;

  ngOnInit(): void {
    this.getCurrentWeather(this.cityName);
  }

  onSubmit(){
    this.getCurrentWeather(this.cityName);
    this.cityName = '';

  }

  private getCurrentWeather(cityName: string) {
    this.weatherService.getCurrentWeather(cityName)
    .subscribe({
      next: (response) => {
        this.currentWeather = response;
        this.currentWeather.main.temp = this.transformFahrenheitToCelsius (this.currentWeather.main.temp);
        this.currentWeather.main.temp_min = this.transformFahrenheitToCelsius (this.currentWeather.main.temp_min);
        this.currentWeather.main.temp_max = this.transformFahrenheitToCelsius (this.currentWeather.main.temp_max);
        console.log(response);
      }
    });
  }
  transformFahrenheitToCelsius(fahrenheit: number): number {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
}
