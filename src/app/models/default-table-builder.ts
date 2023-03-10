import {ITableColumnBuilder} from "./table-column-builder";
import {ITableBuilder} from "./table-builder";
import {DefaultColumnTableBuilder} from "./default-column-table-builder";
import {TableConfig} from "./table-config";

export class DefaultTableBuilder<Source, ReducedSource = Source> implements ITableBuilder<Source, ReducedSource> {

  private tableConfig = new TableConfig();

  addColumn(): ITableColumnBuilder<ITableBuilder<Source, ReducedSource>, Source, ReducedSource> {
    return new DefaultColumnTableBuilder<Source, ReducedSource>(this, this.tableConfig);
  }

  build(): TableConfig<Source> {
    return undefined as any;
  }

}
