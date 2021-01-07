import { DataGridColumns, GridState, IDataGridOptions } from '@zy/shared/ui-grid';

export interface IDataGridViewModel {
  gridOptions: IDataGridOptions;
  gridColumns: DataGridColumns;

  createGridOptions(): IDataGridOptions;

  createGridColumns(): DataGridColumns;
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
