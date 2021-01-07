import { AfterViewInit, Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';

import { GridReadyEvent, Module } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { GridLocaleService } from '../service';
import { DataGridCommonOptions, DataGridOptionsUtil, IDataGridOptions } from '../options';
import { GridState } from './grid-state';
import { DataGridColumns } from '../model';
import { IGridColumnsBuilder } from '../builder';
import { IDataGridViewModel } from './data-grid-vm.interface';
import { COLUMN_DEFAULT_VALUE } from '../options/column-default-value';
import { LOCALE_TEXT_GRID } from '../util/locale-text-grid';


@Component({
  template: ''
})
export abstract class BaseGridViewModel<T> implements IDataGridViewModel, OnInit, AfterViewInit {
  private _items: T[];
  @Input()
  public set items(value: T[]) {
    this._items = value;
    this.refreshGrid();
  }

  private readonly _gridLocaleService: GridLocaleService;

  private _gridOptions: IDataGridOptions;
  private _gridColumns: DataGridColumns;

  public title: string;
  private _rowCount = 0;
  public filterModel: any;

  protected enableRowDetail = true;
  protected cacheBlockSize: number;
  protected gridState: GridState<T>;

  protected constructor(injector: Injector) {
    this.cacheBlockSize = 50;
    this._gridLocaleService = injector.get(GridLocaleService);
  }

  ngOnInit() {
    this.initGrid();
  }

  public ngAfterViewInit(): void {
    this.registerFilterChangeHandlers();
  }

  private initGrid(): void {
    this._gridOptions = this.initGridOptions();
    this.setRowCount(this._gridOptions.rowData.length);
    // this.bindGridReady();
  }
  public initGridOptions(): IDataGridOptions {
    this._gridColumns = this.initGridColumns();
    const rowSelection = this.getRowSelectionType();
    // this.setColumnSortOrder();
    return DataGridOptionsUtil.getGridOptions(
      {
        rowData: this._items,
        columnDefs: this._gridColumns.getLayout(),
        defaultColDef: COLUMN_DEFAULT_VALUE,
        localeText: LOCALE_TEXT_GRID,
        cacheQuickFilter: true, // Quick Filter Cache
      },
      DataGridCommonOptions
    );
  }

  public initGridColumns(): DataGridColumns {
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

  public get gridColumns(): DataGridColumns {
    return this._gridColumns;
  }

}

// 表头行高
const DEFAULT_HEADER_ROWS = 2;
