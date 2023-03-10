import {Inject, Injectable} from '@angular/core';
import {CITY_DATA_URL} from "../tokens/city-data-url.token";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ICitiesResponse} from "../models/cities";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(@Inject(CITY_DATA_URL) private readonly baseUrl: string, private readonly httpClient: HttpClient) { }

  public findAll(): Observable<ICitiesResponse> {
    return this.httpClient.get<ICitiesResponse>(this.baseUrl);
  }
}
