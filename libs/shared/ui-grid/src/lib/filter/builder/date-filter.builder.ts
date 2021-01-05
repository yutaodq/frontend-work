import { GridFilter, DateGridFilter, GridFilterCompareOpMap } from '..';
import { IFilterBuilder } from './filter-builder.type';
import { IServerFilter } from '@zy/shared/util';

export abstract class DateFilterBuilder implements IFilterBuilder {
    public build(fields: string[], gridFilter: GridFilter): IServerFilter {
        const dateGridFilter = <DateGridFilter>gridFilter;
        const compareOp = GridFilterCompareOpMap[dateGridFilter.type];
        return dateGridFilter.dateFrom === null ? null : this.getDateFilter(fields, dateGridFilter, compareOp);
    }

    protected abstract getDateFilter(
        fields: string[],
        dateGridFilter: DateGridFilter,
        compareOp: string
    ): IServerFilter;
}
