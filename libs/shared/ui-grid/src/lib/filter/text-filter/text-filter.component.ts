import { Component, ViewChild } from '@angular/core';
import { IDoesFilterPassParams } from '@ag-grid-community/all-modules';

import {
    LfInputText,
    LfInputComponent
} from 'zyapp/html-ui/input';
import {
    GridFilter,
    TextGridFilter
} from 'zyapp/grid/filter/model/grid-filter.model';
import {
    TextFilterOptionExt,
    IGridFilterParams
} from 'zyapp/grid/filter/model/grid-filter-params';
import {
    GridFilterComponent
} from 'zyapp/grid/filter/grid-filter.component';

@Component({
    selector: 'ui-text-filter',
    templateUrl: './text-filter.component.html'
})
export class TextFilterComponent extends GridFilterComponent<string> {
    @ViewChild('filterText', {static: false})
    protected input: LfInputText;
    public filterRegExp: RegExp;

    public agInit(params: IGridFilterParams): void {
        super.agInit(params);
        if (this.params.filterOptionExt) {
            this.filterRegExp = (<TextFilterOptionExt>this.params.filterOptionExt).regExp;
            this.filteringType = (<TextFilterOptionExt>this.params.filterOptionExt).filterType;
        }
    }

    protected get filterInput(): LfInputComponent<string> {
        return this.input;
    }

    public isFilterActive(): boolean {
        return super.isFilterActive() && this.filterValue !== '';
    }

    public doesFilterPass(params: IDoesFilterPassParams): boolean {
        // This function only applies to in-memory grid
        // 单元格的当前值

        return (
            this.valueGetter(params.node)
                .toString()
                .toLowerCase()
                .indexOf(this.filterValue.toLowerCase()) >= 0
        );
    }

    public getModel(): GridFilter {
        return new TextGridFilter(this.filteringType, this.filterValue);
    }

    public setModel(model: any): void {
        this.filteringType = model ? model.type : null;
        this.filterValue = model ? model.filter : '';
    }
}
