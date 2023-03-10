import { Component } from '@angular/core';
import {CityService} from "../../services/city.service";
import {map, shareReplay} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  protected cities$ = this.cityService.findAll().pipe(map(response => response.cities), shareReplay({bufferSize: 1, refCount: true}));

  constructor(private readonly cityService: CityService) {
  }
}
