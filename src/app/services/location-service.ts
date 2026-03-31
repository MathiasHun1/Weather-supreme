import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CityModel} from '../models/city.model';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly endpoint = 'https://geocoding-api.open-meteo.com/v1/search';
  private readonly http = inject(HttpClient)

  getCityData(name: string): Observable<CityModel | null> {
    return this.http.get<{ results?: CityModel[] }>(`${this.endpoint}`, {
      params: {
        name: name,
        count: 1
      },
    }).pipe(
      map(response => {
        return response.results ? response.results[0] : null;
      })
    );
  }
}
