import { AfterViewInit, Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';

import { GridReadyEvent, Module } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { GridLocaleService } from '../service';
import { DataGridCommonOptions, DataGridOptionsUtil, IDataGridOptions } from '../options';
import { GridState } from './grid-state';
import { DataGridColumns, IDataGridColumn } from '../model';
import { IGridColumnsBuilder } from '../builder';
import { Vehicle } from '@zy/model';


@Component({
  template: ''
})
export abstract class BaseGridViewModel<T> implements OnInit, AfterViewInit {
  private _items: T[];
  @Input()
  public set items(value: T[]) {
    this._items = value;
    this.refreshGrid();
  }

  private readonly _gridLocaleService: GridLocaleService;

  private _gridOptions: IDataGridOptions;
  public title: string;
  private _rowCount = 0;
  public filterModel: any;

  protected enableRowDetail = true;
  protected cacheBlockSize: number;
  protected gridState: GridState<T>;

  // private _gridColumns: DataGridColumns;

  protected constructor(injector: Injector) {
    this.cacheBlockSize = 50;
    this._gridLocaleService = injector.get(GridLocaleService);
  }

  ngOnInit() {
    this.loadData();
  }

  public ngAfterViewInit(): void {
    this.registerFilterChangeHandlers();
  }

  private loadData(): void {
    this._gridOptions = this.gridOptionsBuilder();
    this.setRowCount(this._gridOptions.rowData.length);
    // this.bindGridReady();
  }
  public gridOptionsBuilder(): IDataGridOptions {
    const gridColumns = this.getGridColumns();
    const rowSelection = this.getRowSelectionType();
    // this.setColumnSortOrder();
    return DataGridOptionsUtil.getGridOptions(
      {
        rowData: this._items,
        columnDefs: gridColumns.getLayout(),
        defaultColDef: DEFAULT_COLUMN,
        // rowModelType: 'infinite',  //设置后不显示数据 客户端行模型 https://www.ag-grid.com/javascript-grid-infinite-scrolling/
        cacheBlockSize: this.cacheBlockSize, // 一次取50行 (~200K)
        maxBlocksInCache: 10, // 在缓存中保留最多500行 (~2000K)
        rowSelection: rowSelection, // 选择行
        checkboxColumn: this.showCheckboxColumn(),
        rowDeselection: true, // 设置为true时，如果按住Ctrl并单击该行，则允许取消选定行  https://www.ag-grid.com/javascript-grid-selection/
        maxConcurrentDatasourceRequests: 2, // 不知道的功能
        floatingFilter: true, // 设置为true直接显示过滤器，如果为false 需要点击列头
        // frameworkComponents: GridFilterFrameworkComponents,
        enableRowDetail: this.enableRowDetail, // 不知道的功能
        headerRows: this.getHeaderRowsCount(), // 标题行的高度(px)。如果没有指定，它将获取rowHeight值。
        suppressMenuHide: true, //  设置为true以始终显示列菜单按钮，而不是仅在鼠标位于列标题上时显示。
        rows: 2,
        // rows: this.getGridMinRows(), // 不知道的功能
        localeTextFunc: (key, defaultValue) => this._gridLocaleService.agGridLang(key, defaultValue),
        cacheQuickFilter: true, // Quick Filter Cache
        context: {
          hostComponent: this
        }
      },
      DataGridCommonOptions
    );
  }

  // protected setGridColumns(): void {
  //   this._gridColumns = this.getGridColumns();
  // }

  public getGridColumns(): DataGridColumns {
    return this.getGridColumnsBuilder().build();
  }

  protected abstract getGridColumnsBuilder(): IGridColumnsBuilder;

  /*
    属性rowSelection='single'被设置为启用单行选择。不可能选择多个行
    属性rowSelection='multiple'被设置为启用多行选择。
    选择多行可以通过按住Ctrl并单击鼠标来实现。可以使用Shift选择一个行范围。
    https://www.ag-grid.com/javascript-grid-selection/
   */
  public getRowSelectionType(): string {
    return this.showCheckboxColumn() ? 'multiple' : 'single';
  }

  protected getHeaderRowsCount(): number {
    return DEFAULT_HEADER_ROWS;
  }

  protected showCheckboxColumn(): boolean {
    return true;
  }

  protected abstract getGridStateKey(): string;

  // private bindGridReady(): void {
  //   this._gridOptions.onGridReady = (event: GridReadyEvent) => {
  //     // this.gridApi = event.api;
  //     this.setColumnFilters();
  //   };
  // }

  // protected setColumnFilters(): void {
  //   if (this.filterModelExist()) {
  //     // tslint:disable-next-line:forin
  //     for (const filter in this.gridState.filterModel) {
  //       const filterComponent = this._gridOptions.api.getFilterInstance(filter);
  //       filterComponent.setModel(this.gridState.filterModel[filter]);
  //     }
  //     this._gridOptions.api.onFilterChanged();
  //   }
  // }

  private filterModelExist(): boolean {
    return this.gridState && this.gridState.filterModel;
  }

  // protected setColumnSortOrder(): void {
  //   if (this.sortModelExist()) {
  //     if (this.sortOrderDefined()) {
  //       this.clearColumnSortOrder();
  //     }
  //
  //     this.gridState.sortModel.forEach(sortModel => {
  //       const column: IDataGridColumn = this._gridColumns.itemByField(sortModel.colId);
  //       if (column) {
  //         column.sort = sortModel.sort;
  //       }
  //     });
  //   }
  // }

  // private sortModelExist(): boolean {
  //   return this.gridState && this.gridState.sortModel && this.gridState.sortModel.length > 0;
  // }
  //
  // // returns true if any of the column has sort order defined
  // private sortOrderDefined(): boolean {
  //   return this._gridColumns.getLayout().some(item => !!item.sort);
  // }
  //
  // private clearColumnSortOrder(): void {
  //   this._gridColumns.getLayout().forEach(column => {
  //     if (column.sort) {
  //       column.sort = undefined;
  //     }
  //   });
  // }

  // end setColumnSortOrder()

  // 快速过滤器
  public onQuickFilterChanged($event) {
    this._gridOptions.api.setQuickFilter($event.target.value);
  }

  protected abstract registerFilterChangeHandlers(): void;

  public refreshGrid(): void {
    if (this._gridOptions && this._gridOptions.api) {
      this._gridOptions.api.setRowData(this._items);
      this._gridOptions.rowData = this._items;
      this.setRowCount(this._items.length);
      // this.setGridHeight(this.gridOptions);
    }
  }

  /*
属性设置器和获得器
 */
  get rowCount(): number {
    return this._rowCount;
  }

  setRowCount(value: number) {
    this._rowCount = value;
  }

  public get gridOptions(): IDataGridOptions {
    return this._gridOptions;
  }


}

// 表头行高
const DEFAULT_HEADER_ROWS = 2;
const DEFAULT_COLUMN = {
  resizable: true,   // 允许拖动修改列宽
  sortable: true,
  suppressSizeToFit: true,    // 设置为true,则开启宽度自适应时这一栏宽度固定，否则，会按照各个栏的宽度比例自适应
  filter: true
  // headerComponent: 'sortableHeaderComponent',
  // headerComponentParams: {
  //   menuIcon: 'bars'
  // }
};
