import {ITableColumnBuilder} from "./table-column-builder";
import {TableConfig} from "./table-config";

export interface ITableBuilder<Source, ReducedSource = Source> {

  addColumn(): ITableColumnBuilder<ITableBuilder<Source, ReducedSource>, Source, ReducedSource>;

  build(): TableConfig<Source>;
}
