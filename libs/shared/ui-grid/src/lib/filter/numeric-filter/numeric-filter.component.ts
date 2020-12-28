import { Component, ViewChild } from '@angular/core';
import { IDoesFilterPassParams } from '@ag-grid-community/all-modules';

import { ListItem } from 'zyapp/base-ui/model';
import { LfInputNumber, LfInputComponent } from 'zyapp/html-ui/input';
import { GridFilter, NumericGridFilter, GridFilteringType } from 'zyapp/grid/filter/model/grid-filter.model';
import { NumericFilterOptionExt } from 'zyapp/grid/filter/model/grid-filter-params';
import { GridFilterComponent } from 'zyapp/grid/filter/grid-filter.component';
import { FilterUtil } from 'zyapp/grid/filter/filter.util';

@Component({
    selector: 'ui-numeric-filter',
    templateUrl: './numeric-filter.component.html'
})
export class NumericFilterComponent extends GridFilterComponent<number> {
    @ViewChild('filterText', {static: false})
    protected input: LfInputNumber;

   protected get filterInput(): LfInputComponent<number> {
        return this.input;
    }

    public getFilteringTypeList(): Array<ListItem> {
        let filteringTypeList = [
            new ListItem(this.gridFilteringTypeLabelMap[GridFilteringType.Equals], GridFilteringType.Equals)
        ];
        if (this.isRangeFilter()) {
            const inRangeFilteringTypeList = [
                new ListItem(
                    this.gridFilteringTypeLabelMap[GridFilteringType.GreaterThanOrEqual],
                    GridFilteringType.GreaterThanOrEqual
                ),
                new ListItem(
                    this.gridFilteringTypeLabelMap[GridFilteringType.LessThanOrEqual],
                    GridFilteringType.LessThanOrEqual
                ),
                new ListItem(this.gridFilteringTypeLabelMap[GridFilteringType.InRange], GridFilteringType.InRange)
            ];
            filteringTypeList = filteringTypeList.concat(inRangeFilteringTypeList);
        }
        return filteringTypeList;
    }

    protected isRangeFilter(): boolean {
        if (this.params.filterOptionExt) {
            return (<NumericFilterOptionExt>this.params.filterOptionExt).isRangeType;
        }
        return true;
    }

    public getDefaultFilteringType(): string {
        if (this.isRangeFilter()) {
            return GridFilteringType.InRange;
        }
        return GridFilteringType.Equals;
    }

    public doesFilterPass(params: IDoesFilterPassParams): boolean {
        // This function only applies to in-memory grid, not server grid
        return FilterUtil.passFilter<number>(
            this.filteringType,
            this.valueGetter(params.node),
            this.filterValue,
            this.filterToValue
        );
    }

    public getModel(): GridFilter {
        return new NumericGridFilter(this.filteringType, this.filterValue, this.filterToValue);
    }

    public setModel(model: any): void {
        this.filteringType = model ? model.type : null;
        this.filterValue = model ? model.filter : null;
        this.filterToValue = model ? model.filterTo : null;
    }
}
