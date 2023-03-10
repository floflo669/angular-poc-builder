import {ITableColumnBuilder} from "./table-column-builder";
import {ITableBuilder} from "./table-builder";
import {ITableColumnFieldBuilder} from "./table-column-field-builder";
import {TableConfig} from "./table-config";
import {TableColumnConfig} from "./table-column-config";

type ITableColumnBuilderType<Source, ReducedSource> = ITableColumnBuilder<ITableBuilder<Source, ReducedSource>, Source, ReducedSource>;
type ITableColumnFieldBuilderType<Source, ReducedSource> = ITableColumnFieldBuilder<ITableColumnBuilderType<Source, ReducedSource>, Source, ReducedSource>;

export class DefaultFieldColumnTableBuilder<Source, ReducedSource> implements ITableColumnFieldBuilderType<Source, ReducedSource> {

  private tableColumnConfig = new TableColumnConfig<Source>();

  constructor(private readonly builder: ITableColumnBuilderType<Source, ReducedSource>, private readonly tableConfig: TableColumnConfig<Source>, private readonly key: keyof ReducedSource) {
  }

  buildColumn(): ITableColumnBuilderType<Source, ReducedSource> {
    return this.builder;
  }

}
