import {ITableBuilder} from "./table-builder";
import {ITableColumnFieldBuilder} from "./table-column-field-builder";

export interface ITableColumnBuilder<T extends ITableBuilder<Source, ReducedSource>, Source, ReducedSource> {

  field<Field extends keyof ReducedSource>(value: Field): ITableColumnFieldBuilder<ITableColumnBuilder<ITableBuilder<Source, Omit<ReducedSource, Field>>, Source, Omit<ReducedSource, Field>>, Source, Omit<ReducedSource, Field>>;

  custom(callback: (source: Source) => string): ITableColumnFieldBuilder<ITableColumnBuilder<ITableBuilder<Source, ReducedSource>, Source, ReducedSource>, Source, ReducedSource>;

  build(): T;
}
