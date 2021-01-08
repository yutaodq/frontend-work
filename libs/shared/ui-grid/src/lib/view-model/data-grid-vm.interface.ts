import { DataGridColumns, GridState, IDataGridOptions } from '@zy/shared/ui-grid';
import { ColDef } from 'ag-grid-community';

export interface IDataGridViewModel {
  gridOptions: IDataGridOptions;
  dataGridColumns: DataGridColumns;
  gridColumns: Array<ColDef>;
  createGridOptions(): IDataGridOptions;

  // get gridColumns(): Array<ColDef>;
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
