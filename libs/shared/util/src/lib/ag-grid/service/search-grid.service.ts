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
