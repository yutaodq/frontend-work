import { GridOptions, ColDef, CellFocusedEvent, ColumnResizedEvent } from 'ag-grid-community';

import { IDataGridColumn } from '../model';
import { IDataGridCommonOptions } from './data-grid-common-options';
import { LoadingOverlayComponent, NoRowsOverlayComponent } from '../components/overlay';
import { ButtonRenderedComponent, RendererComponent } from '../components/renderer';

export const HEADER_ROW_HEIGHT = 25;   // 标题行高度
export const DataGridRowNumber = {
  Small: 4,
  Medium: 10,
  Large: 25,
  ExtraLarge: 50
};
export const DataGridCustomOptions = {
  NoRowsOverlay: 'customNoRowsOverlay',
  LoadingOverlay: 'çustomLoadingOverlay',
  RendererComponent: 'rendererComponent',
  ButtonRenderedComponent: 'buttonRendered'
};

export interface IDataGridOptions extends GridOptions {
  headerRows?: number;
  rows?: number;
  height?: string;
  gridClass?: string;
  showTotal?: boolean;
  checkboxColumn?: boolean;
  enableRowDetail?: boolean;
}

// gridOptions.headerRows
export class DataGridOptionsUtil {
  public static getGridOptions(
    options: IDataGridOptions,
    commonOptions: IDataGridCommonOptions
  ): IDataGridOptions {
    const gridOptions = {
      ...options, ...commonOptions
    };

    // gridOptions.headerRows 标题行的高度(px)。如果没有指定，它将获取rowHeight值。
    if (gridOptions.headerRows) {
      this.setHeaderHeight(gridOptions);
    }
    if (!gridOptions.height) {
      this.setHeight(gridOptions);
    }
    this.setOverlayComponents(gridOptions);
    if (this.needToHandleColumnResize(gridOptions)) {
      this.addColumnResizedHandler(gridOptions);
    }
    // 显示 checkbox 可以多选
    if (gridOptions.checkboxColumn) {
      this.insertCheckboxColumn(gridOptions);
    }
    this.setRowSelection(gridOptions);
    // 后加入的
    this.setRenderComponents(gridOptions);
    return gridOptions;
  }

  private static setRenderComponents(options: IDataGridOptions): void {
    options.frameworkComponents = options.frameworkComponents || {};
    options.frameworkComponents[DataGridCustomOptions.RendererComponent] = RendererComponent;
    options.frameworkComponents[DataGridCustomOptions.ButtonRenderedComponent] = ButtonRenderedComponent;

  }

  private static setHeaderHeight(options: IDataGridOptions): void {
    options.headerHeight = options.headerRows * HEADER_ROW_HEIGHT;
  }

  private static setHeight(options: IDataGridOptions): void {
    const rows = options.rows || DataGridRowNumber.Medium;
    const height = rows * options.rowHeight + (options.headerHeight || HEADER_ROW_HEIGHT);
    options.height = `${height}px`;
  }

  private static setOverlayComponents(options: IDataGridOptions): void {
    options.frameworkComponents = options.frameworkComponents || {};
    this.setNoRowsOverlayComponent(options);
    this.setLoadingOverlayComponent(options);
  }

// 没有记录时显示
  protected static setNoRowsOverlayComponent(options: IDataGridOptions): void {
    options.frameworkComponents[DataGridCustomOptions.NoRowsOverlay] = NoRowsOverlayComponent;
    options.noRowsOverlayComponent = DataGridCustomOptions.NoRowsOverlay;
  }

// 加载记录时显示
  protected static setLoadingOverlayComponent(options: IDataGridOptions): void {
    options.frameworkComponents[DataGridCustomOptions.LoadingOverlay] = LoadingOverlayComponent;
    options.loadingOverlayComponent = DataGridCustomOptions.LoadingOverlay;
  }

  // 是否需要自动调整列的大小
  private static needToHandleColumnResize(options: IDataGridOptions): boolean {
    const hasAutoHeight = options.columnDefs.findIndex(colDef => (colDef as ColDef).autoHeight) >= 0;
    // 源代码const hasAutoHeight = options.columnDefs.findIndex(colDef => (colDef as ColDef).autoHeight == true) >= 0;
    return options.defaultColDef.resizable && hasAutoHeight;
  }

  // 调整列的大小
  private static addColumnResizedHandler(options: IDataGridOptions): void {
    options.onColumnResized = (event: ColumnResizedEvent) => {
      if (event.finished && event.column.getColDef().autoHeight) {
        options.api.resetRowHeights();
      }
    };
  }

  private static insertCheckboxColumn(options: IDataGridOptions): void {
    const checkboxColumn: IDataGridColumn = {
      headerName: '',
      width: 50,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      headerClass: 'lf-grid-checkbox-header-cell',
      cellClass: 'lf-grid-checkbox-column-cell',
      filter: true
    };
    options.columnDefs.splice(0, 0, checkboxColumn);
  }

  private static setRowSelection(options: IDataGridOptions): void {
    const isMultiSelection = options.rowSelection === 'multiple';
    if (!isMultiSelection) {
      options.onCellFocused = (event: CellFocusedEvent) => {
        options.api.forEachNode(node => {
          if (node.rowIndex === event.rowIndex) {
            node.setSelected(true, true);
          }
        });
      };
    }
  }

}
