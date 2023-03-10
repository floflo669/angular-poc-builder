import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {CITY_DATA_URL} from "./tokens/city-data-url.token";
import {HttpClientModule} from "@angular/common/http";
import { TableComponent } from './components/table/table.component';
import { TableObserveDirective } from './directives/table-observe.directive';
import { TableDataDirective } from './directives/table-data.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableObserveDirective,
    TableDataDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: CITY_DATA_URL,
      useValue: "https://static.data.gouv.fr/resources/villes-de-france/20220928-173621/cities.json"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
