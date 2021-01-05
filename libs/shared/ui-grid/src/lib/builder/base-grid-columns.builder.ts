import { DataGridColumns, IDataGridColumn } from '../model';

export interface IGridColumnsBuilder {
    build(...params: any[]): DataGridColumns;
    addColumn(column: IDataGridColumn): void;
}

export abstract class BaseGridColumnsBuilder implements IGridColumnsBuilder {
    protected columns: DataGridColumns;

    protected constructor() {
        this.columns = new DataGridColumns();
    }

    public abstract build(...params: any[]): DataGridColumns;

    public addColumn(column: IDataGridColumn): void {
        this.adjustColumnProperties(column);
        this.columns.add(column);
    }

    public resetColumns(): void {
        this.columns.removeAll();
    }

    private adjustColumnProperties(column: IDataGridColumn): void {
        if (column.filter) {
            if (!column.menuTabs) {
                column.menuTabs = ['filterMenuTab'];
            }
        }
        if (column.autoHeight) {
            column.cellClass = 'cell-wrap-text';
        }
    }
}
