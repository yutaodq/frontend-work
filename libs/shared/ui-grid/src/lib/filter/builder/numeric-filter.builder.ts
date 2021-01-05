﻿import { IFilterBuilder } from './filter-builder.type';
import { GridFilter, GridFilterCompareOpMap, NumericGridFilter } from '..';
import { IServerFilter } from '@zy/shared/util';

export abstract class NumericFilterBuilder implements IFilterBuilder {
    public build(fields: string[], gridFilter: GridFilter): IServerFilter {
        const numericGridFilter = <NumericGridFilter>gridFilter;
        const compareOp = GridFilterCompareOpMap[numericGridFilter.type];
        return numericGridFilter.filter === null ? null : this.getNumericFilter(fields, numericGridFilter, compareOp);
    }

    protected abstract getNumericFilter(
        fields: string[],
        numericGridFilter: NumericGridFilter,
        compareOp: string
    ): IServerFilter;
}
