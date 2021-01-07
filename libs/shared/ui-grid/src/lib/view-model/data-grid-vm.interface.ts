import { DataGridColumns, GridState, IDataGridOptions } from '@zy/shared/ui-grid';

export interface IDataGridViewModel {
  gridOptions: IDataGridOptions;
  gridColumns: DataGridColumns;

  initGridOptions(): IDataGridOptions;

  initGridColumns(): DataGridColumns;
}

export interface IDataSourceContext {
  onGetRowsComplete({
                      gridState,
                      rows,
                      rowCount
                    }: {
    gridState: GridState;
    rows: Array<any>;
    rowCount: number;
  }): void;
}

export interface IDataGridContext {
  hostComponent: IDataSourceContext;
}
