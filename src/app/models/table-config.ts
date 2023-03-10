import {ITableColumnBuilder} from "./table-column-builder";
import {ITableBuilder} from "./table-builder";
import {DefaultColumnTableBuilder} from "./default-column-table-builder";
import {TableColumnConfig} from "./table-column-config";

export class TableConfig<Source> {

  columns = [] as TableColumnConfig<Source>[];

  constructor() {
  }


}
