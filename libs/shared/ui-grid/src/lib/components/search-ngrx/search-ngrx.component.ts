/*
学习：
https://github.com/saisureshdeveloper/ReportApp/tree/78ac33c5a2362d53af8c53067a064c4bfb7223b6
D:\学习案例\真实案例\ReportApp\Adventui_src\src\app\modules\home\dashboard\table-control\table-control.component.ts
 */
import { Component, OnInit, Input } from '@angular/core';
import { SearchGridService, SearchNgrxGridService } from '@zy/shared/util';

@Component({
  selector: 'zy-ui-grid-search-ngrx',
  templateUrl: './search-ngrx.component.html',
  styleUrls: ['./search-ngrx.component.css'],
  providers: [SearchNgrxGridService]
})
export class SearchNgrxComponent implements OnInit {
  public globalFilter: string;
  @Input() set globalFilterInp(value: string) {
    this.globalFilter = value;
  }

  constructor(
    private searchGridService: SearchGridService,
     public searchNgrxGridService: SearchNgrxGridService
  ) { }

  ngOnInit() {
    this.searchGridService.globalFilterResetSubject.subscribe(data => {
      this.globalFilter = '';
    });
  }

  onGlobalFilterChanged(val) {
    this.globalFilterInp = val;
    this.searchGridService.globalFilterSubject.next(val);
    this.searchNgrxGridService.search(val);
  }


  onClearSearch() {
    this.searchGridService.clearSearchSubject.next(true);
  }

  public isShowSearchIcon(): boolean {
    return this.globalFilter.length === 0;
  }
  public isShowClearIcon(): boolean {
    return !this.isShowSearchIcon();
  }

}
