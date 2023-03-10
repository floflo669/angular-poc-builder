import {Component, Inject, OnInit} from '@angular/core';
import {TABLE_DATA_ACCESSOR} from "../../tokens/table-data-accessor.token";
import {ITableAccessor} from "../../models/table-accessor";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {

  constructor(@Inject(TABLE_DATA_ACCESSOR) private readonly tableDataAccessor: ITableAccessor<T[]>) {
  }

  ngOnInit(): void {
    this.tableDataAccessor.retrieveData().subscribe(v => console.log(v));
  }
}
