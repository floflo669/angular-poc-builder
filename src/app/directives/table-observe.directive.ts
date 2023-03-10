import {Directive, forwardRef, Input} from '@angular/core';
import {TABLE_DATA_ACCESSOR} from "../tokens/table-data-accessor.token";
import {ITableAccessor} from "../models/table-accessor";
import {Observable} from "rxjs";

@Directive({
  selector: 'app-table[observe]',
  providers: [
    {
      provide: TABLE_DATA_ACCESSOR,
      useExisting: forwardRef(() => TableObserveDirective)
    }
  ]
})
export class TableObserveDirective<T> implements ITableAccessor<T[]> {

  @Input()
  observe!: Observable<T[]>;

  constructor() {
  }

  retrieveData(): Observable<T[]> {
    return this.observe;
  }
}
