// import { I18n } from 'life-core/i18n-cms';
import { RouterAccessor } from 'zyapp/base-ui/routing';
import {Injector} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import { DataGridColumns, IDataGridColumn } from '../model';
export interface IGridColumnsBuilder {
    build(...params: any[]): DataGridColumns;
    addColumn(column: IDataGridColumn): void;
}

export abstract class BaseGridColumnsBuilder implements IGridColumnsBuilder {
    protected injector: Injector;
    protected columns: DataGridColumns;
    protected routerAccessor: RouterAccessor;

    protected constructor(injector: Injector) {
        this.injector = injector;
        this.columns = new DataGridColumns();
        this.routerAccessor = new RouterAccessor(injector.get(Router), injector.get(ActivatedRoute));
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
