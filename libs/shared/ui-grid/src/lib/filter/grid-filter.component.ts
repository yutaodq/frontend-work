import {ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {IAfterGuiAttachedParams, IDoesFilterPassParams, RowNode} from '@ag-grid-community/all-modules';
import {IFilterAngularComp} from '@ag-grid-community/angular';

import {ListItem} from 'zyapp/base-ui/model';
import {LfInputComponent} from 'zyapp/html-ui/input';
import {GridFilter, GridFilteringType} from './model/grid-filter.model';
import {IGridFilterParams} from 'zyapp/grid/filter/model/grid-filter-params';

export abstract class GridFilterComponent<T> implements IFilterAngularComp {
    protected params: IGridFilterParams;
    protected valueGetter: (rowNode: RowNode) => any;
    /**
     * filteringType: Filtering type such as 'equals' and 'greaterThan'. List defined in GridFilteringType.
     */
    public filteringType: string;
    public filteringTypeList: Array<ListItem>;
    /**
     * filterValue: For single filter it's the filtering value, else it's the filtering from value
     */
    public filterValue: T;
    /**
     * filterToValue: The filtering to value. Only applies to non-single filter
     */
    public filterToValue?: T;
    @ViewChild('form', {static: false})
    public form: NgForm;
    public isSingleFilter = true;
    public filterValueLabel: string;
    public messages: Array<string>;
    private _originalModel: GridFilter;
    protected gridFilteringTypeLabelMap: { readonly [key: string]: string };

    public agInit(params: IGridFilterParams): void {
        this.params = params;
        this.valueGetter = params.valueGetter;
        this.setupGridFilteringTypeLabelMap();
        this.filteringTypeList = this.getFilteringTypeList();
        this.saveFilterModel();
    }
    protected abstract get filterInput(): LfInputComponent<T>;

    public getFilteringTypeList(): Array<ListItem> {
        // override in child classes if need to provide filteringTypeList
        return null;
    }

    public getDefaultFilteringType(): string {
        // override in child classes to provide default filtering type
        return null;
    }

    /*
    ag-Grid调用的一个函数是isFilterActive。
    它确定筛选器是否具有要应用的筛选条件。
    */
    public isFilterActive(): boolean {
        return this.filterValue !== null && this.filterValue !== undefined;
    }
    /*
      ag-Grid调用的一个函数,以确定一个值是否通过当前筛选条件。
     */
    public abstract doesFilterPass(params: IDoesFilterPassParams): boolean;
/*
    getModel - 返回活动筛选器模型
    ag-Grid调用它们来为组件提供当前过滤条件，或从组件获取该条件。
*/
    public abstract getModel(): GridFilter;
    public abstract setModel(model: any): void;

    public afterGuiAttached(params?: IAfterGuiAttachedParams): void {
        this.messages = [];
        this.setDefaultValues();
        this.setIsSingleFilter();
        this.setFilterInputLabel();
        setTimeout(() => {
            this.filterInput.setFocus();
        });
    }

    private setDefaultValues(): void {
        if (!this.filteringType) {
            this.filteringType = this.getDefaultFilteringType();
        }
    }

    private setIsSingleFilter(): void {
        this.isSingleFilter = this.filteringType !== GridFilteringType.InRange;
    }

    private setFilterInputLabel(): void {
        this.filterValueLabel =
            this.filteringType === GridFilteringType.InRange
                ? 'component.grid.filter.label.from'
                : 'component.grid.filter.label.value';
    }

    public onFilteringTypeChange(): void {
        this.setIsSingleFilter();
        this.setFilterInputLabel();
    }

    public onApplyClick(): void {
        if (this.form.invalid) {
            this.showInvalidDataMessage();
        } else {
            this.saveFilterModel();
            this.params.filterChangedCallback();
            this.closeFilterMenu();
        }
    }

    private showInvalidDataMessage(): void {
        this.messages = [];
        this.messages.push(this.invalidDataMessage);
    }

    private saveFilterModel(): void {
        this._originalModel = this.getModel();
    }

    public onClearClick(): void {
        const isFilterValueSet: boolean = this.isFilterActive();
        this.form.resetForm();
        this.saveFilterModel();
        if (isFilterValueSet) {
            this.params.filterChangedCallback();
        }
        this.closeFilterMenu();
    }

    public onCancelClick(): void {
        if (this.form.dirty && this._originalModel) {
            this.restoreFilterModel();
        }
        this.closeFilterMenu();
    }

    private restoreFilterModel(): void {
        this.setModel(this._originalModel);
    }

    private closeFilterMenu(): void {
        // ag-grid doesn't provide an API to close the filter menu yet. A feature request is
        // currently in backlog. See issue # AG-144 in https://www.ag-grid.com/ag-grid-pipeline/.
        // Below is a temporary workaround
        document.documentElement.click();
    }

    private get invalidDataMessage(): string {
        return 'component.grid.filter.invalidvalue';
    }

    private setupGridFilteringTypeLabelMap(): void {
        this.gridFilteringTypeLabelMap = {
            equals: 'component.grid.filter.invalidvalue',
            // notEqual: 'Not Equal',
            // lessThan: 'Less Than',
            lessThanOrEqual: 'component.grid.filter.invalidvalue',
            // greaterThan: 'Greater Than',
            greaterThanOrEqual: 'component.grid.filter.invalidvalue',
            startsWith: 'component.grid.filter.invalidvalue',
            inRange: 'component.grid.filter.invalidvalue'
        };
    }
}
