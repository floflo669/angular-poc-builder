import {Component, OnInit} from '@angular/core';
import {CityService} from "../../services/city.service";
import {map, shareReplay} from "rxjs";
import {ITableBuilder} from "../../models/table-builder";
import {ICityResponse} from "../../models/city";
import {DefaultTableBuilder} from "../../models/default-table-builder";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  protected cities$ = this.cityService.findAll().pipe(map(response => response.cities), shareReplay({bufferSize: 1, refCount: true}));

  constructor(private readonly cityService: CityService) {
  }

  ngOnInit(): void {
    const builder = new DefaultTableBuilder<ICityResponse>();
    const a = builder.addColumn().field("label").buildColumn().field("region_geojson_name").buildColumn().build();
    console.log(a);
  }
}
