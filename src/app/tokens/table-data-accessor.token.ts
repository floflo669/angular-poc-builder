import {InjectionToken} from "@angular/core";
import {ITableAccessor} from "../models/table-accessor";

export const TABLE_DATA_ACCESSOR = new InjectionToken<ITableAccessor<unknown>>("url")
