import {Directive, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TABLE_DATA_ACCESSOR} from "../tokens/table-data-accessor.token";
import {ITableAccessor} from "../models/table-accessor";
import {Observable, Subject} from "rxjs";

@Directive({
  selector: 'app-table[data]',
  providers: [
    {
      provide: TABLE_DATA_ACCESSOR,
      useExisting: forwardRef(() => TableDataDirective)
    }
  ]
})
export class TableDataDirective<T> implements ITableAccessor<T[]>, OnChanges {

  private readonly dataChanges$ = new Subject<T[]>();

  @Input()
  data!: T[] | null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.data) {
      this.dataChanges$.next(this.data);
    }
  }

  retrieveData(): Observable<T[]> {
    return this.dataChanges$.asObservable();
  }

}
