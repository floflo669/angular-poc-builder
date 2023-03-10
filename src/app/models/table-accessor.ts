import {Observable} from "rxjs";

export interface ITableAccessor<T> {
  retrieveData(): Observable<T>;
}
