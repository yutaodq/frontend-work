import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SearchNgrxGridService {

  private _query$: Observable<string>
  public constructor() {  }

   search(query: string) {
   }

   clearSearch() {

   }

  get query$(): Observable<string> {
    return this._query$;
  }

  set query$(value: Observable<string>) {
    this._query$ = value;
  }

}
