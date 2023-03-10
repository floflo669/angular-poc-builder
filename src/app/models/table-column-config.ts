import {ITableColumnBuilder} from "./table-column-builder";
import {ITableBuilder} from "./table-builder";
import {DefaultColumnTableBuilder} from "./default-column-table-builder";

export class TableColumnConfig<Source> {

  private format?: (key: Source) => string;

  constructor() {
  }


  get getFormat(): ((key: Source) => string) | undefined {
    return this.format;
  }

  set setFormat(value: (key: Source) => string) {
    this.format = value;
  }
}
