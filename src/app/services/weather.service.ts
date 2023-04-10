import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(cityName: string): Observable<CurrentWeather>{
    return this.http.get<CurrentWeather>(`${environment.weatherApiBaseUrl}${cityName}`, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.
        XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.
        XRapidAPIKeyHeaderValue)
    })
  }
}
