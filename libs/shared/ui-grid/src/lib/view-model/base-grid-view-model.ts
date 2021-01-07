import { AfterViewInit, Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';

import { GridReadyEvent, Module } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';
import { GridLocaleService } from '../service';
import { DataGridCommonOptions, DataGridOptionsUtil, IDataGridOptions } from '../options';
import { GridState } from './grid-state';
import { DataGridColumns } from '../model';
import { IGridColumnsBuilder } from '../builder';
import { IDataGridViewModel } from './data-grid-vm.interface';
import { COLUMN_DEFAULT_VALUE, ROW_HEIGHT } from '../options/column-default-value';
import { LOCALE_TEXT_GRID } from '../util/locale-text-grid';
import { SearchGridService } from '@zy/shared/util';


@Component({
  template: ''
})
export abstract class BaseGridViewModel<T> implements IDataGridViewModel, OnInit, AfterViewInit {
  private _items: T[];

  private _gridOptions: IDataGridOptions;
  private _gridColumns: DataGridColumns;

  protected cacheBlockSize: number;
  protected gridState: GridState<T>;


  protected constructor(private _searchGridService: SearchGridService) {
    this.cacheBlockSize = 50;
  }

  ngOnInit() {
    this.initGrid();
    this._searchGridService.globalFilterSubject.subscribe(val => {
      if (this.gridOptions.api) {
        this.gridOptions.api.setQuickFilter(val);
      }
    });
    // this.gridOptions.api.setQuickFilter($event.target.value);

  }

  public ngAfterViewInit(): void {
    this.registerFilterChangeHandlers();
  }

  private initGrid(): void {
    this.setGridOptions(this.createGridOptions())
    this.setRowHeight(this._gridOptions)
  }

  public createGridOptions(): IDataGridOptions {
    this.setGridColumns(this.createGridColumns());
    const rowSelection = this.getRowSelectionType();
    return DataGridOptionsUtil.getGridOptions(
      {
        rowData: this.items,
        columnDefs: this.gridColumns.getLayout(),
        defaultColDef: COLUMN_DEFAULT_VALUE,
        localeText: LOCALE_TEXT_GRID,
        cacheQuickFilter: true, // Quick Filter Cache
      },
      DataGridCommonOptions
    );
  }

  public createGridColumns(): DataGridColumns {
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


  private filterModelExist(): boolean {
    return this.gridState && this.gridState.filterModel;
  }

  // 快速过滤器
  public onQuickFilterChanged($event) {
    this.gridOptions.api.setQuickFilter($event.target.value);
  }

  protected abstract registerFilterChangeHandlers(): void;

  public refreshGrid(): void {
    if (this.gridOptions && this.gridOptions.api) {
      this.gridOptions.api.setRowData(this.items);
      this.gridOptions.rowData = this.items;
      this.setRowHeight(this.gridOptions)
    }
  }

  /*
属性设置器和获得器
 */
  @Input()
  public set items(value: T[]) {
    this._items = value;
    this.refreshGrid();
  }

  public get items(): T[] {
    return this._items ;
  }


  private setGridColumns(gridColumns: DataGridColumns) {
    this._gridColumns = gridColumns;
  }

  private setRowHeight(gridOptions: IDataGridOptions) {
    gridOptions.rowHeight= ROW_HEIGHT;
  }

  private setGridOptions(gridOptions: IDataGridOptions) {
    this._gridOptions = gridOptions;
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
