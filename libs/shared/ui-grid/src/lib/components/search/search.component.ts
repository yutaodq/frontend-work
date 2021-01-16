/*
学习：
https://github.com/saisureshdeveloper/ReportApp/tree/78ac33c5a2362d53af8c53067a064c4bfb7223b6
D:\学习案例\真实案例\ReportApp\Adventui_src\src\app\modules\home\dashboard\table-control\table-control.component.ts
 */
import { Component, OnInit, Input } from '@angular/core';
import { SearchGridService } from '@zy/shared/util';

@Component({
  selector: 'zy-ui-grid-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public globalFilter: string;
  @Input() set globalFilterInp(value: string) {
    this.globalFilter = value;
  }
  @Input() rowDataInp: any[];
  @Input() displayedIntData: any[];
  @Input() displayedExtData: any[];
  public openStats: {
    internalRows: number,
    internalAmount: number,
    externalRows: number,
    externalAmount: number,
    canUnGroup: boolean,
    data: any
  };

  private DefaultOpenStats = {
    internalRows: 0,
    internalAmount: 0,
    externalRows: 0,
    externalAmount: 0,
    canUnGroup: false,
    data: {}
  };

  constructor(private searchGridService: SearchGridService,
  ) { }

  ngOnInit() {
    this.searchGridService.globalFilterResetSubject.subscribe(data => {
      this.globalFilter = '';
    });
  }

  changePageSize(val: number) {
    this.searchGridService.changeGridPageSize(val);
  }

  showColumnModal(content) {
    this.globalFilter = '';
    this.searchGridService.globalFilterResetSubject.next('');
  }

  onGlobalFilterChanged(val) {
    this.globalFilterInp = val;
    this.searchGridService.globalFilterSubject.next(val);
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
