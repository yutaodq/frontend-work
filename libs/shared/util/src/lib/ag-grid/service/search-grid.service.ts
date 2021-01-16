/*
https://github.com/saisureshdeveloper/ReportApp/tree/78ac33c5a2362d53af8c53067a064c4bfb7223b6
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchGridService {
  public globalFilterSubject = new BehaviorSubject<string>('');
  public globalFilterResetSubject = new BehaviorSubject<any>('');
  public changeGridPageSizeSubject = new BehaviorSubject<number>(25);
  public clearSearchSubject = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  changeGridPageSize(val: number) {
    this.changeGridPageSizeSubject.next(val);
  }

}
