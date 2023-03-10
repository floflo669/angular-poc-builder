import {ITableBuilder} from "./table-builder";
import {ITableColumnBuilder} from "./table-column-builder";

export interface ITableColumnFieldBuilder<T extends ITableColumnBuilder<ITableBuilder<U>, U>, U> {

  build(): T;
}
