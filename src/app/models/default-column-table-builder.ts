import {ITableColumnBuilder} from "./table-column-builder";
import {ITableBuilder} from "./table-builder";
import {ITableColumnFieldBuilder} from "./table-column-field-builder";
import {TableConfig} from "./table-config";
import {TableColumnConfig} from "./table-column-config";
import {DefaultFieldColumnTableBuilder} from "./default-field-column-table-builder";

type ITableColumnBuilderType<Source, ReducedSource> = ITableColumnBuilder<ITableBuilder<Source, ReducedSource>, Source, ReducedSource>;
type ITableColumnFieldBuilderType<Source, ReducedSource> = ITableColumnFieldBuilder<ITableColumnBuilderType<Source, ReducedSource>, Source, ReducedSource>;

export class DefaultColumnTableBuilder<Source, ReducedSource> implements ITableColumnBuilderType<Source, ReducedSource> {

  private tableColumnConfig = new TableColumnConfig<Source>();

  constructor(private readonly builder: ITableBuilder<Source, ReducedSource>, private readonly tableConfig: TableConfig<Source>) {
  }

  build(): ITableBuilder<Source, ReducedSource> {
    return this.builder;
  }

  field<Field extends keyof ReducedSource>(value: Field): ITableColumnFieldBuilderType<Source, Omit<ReducedSource, Field>> {
    return new DefaultFieldColumnTableBuilder<Source, ReducedSource>(this, this.tableColumnConfig, value);
  }

  custom(callback: (source: Source) => string): ITableColumnFieldBuilderType<Source, ReducedSource> {
    return undefined as any;
  }


}
