import { GridFilter, TextGridFilter, GridFilterCompareOpMap } from '..';
import { IFilterBuilder } from './filter-builder.type';
import { IServerFilter } from '@zy/shared/util';

export abstract class TextFilterBuilder implements IFilterBuilder {
    public build(fields: string[], gridFilter: GridFilter): IServerFilter {
        const textGridFilter = <TextGridFilter>gridFilter;
        const compareOp = GridFilterCompareOpMap[textGridFilter.type];
        if (fields.length === 0 || textGridFilter.filter == null || textGridFilter.filter === '') {
            return null;
        }
        return this.getTextFilter(fields, textGridFilter, compareOp);
    }

    protected getTextFilter(fields: string[], textGridFilter: TextGridFilter, compareOp: string): IServerFilter {
        if (this.isCompositeFilter(fields)) {
            return this.buildCompositeFilter(fields, textGridFilter);
        } else {
            return this.buildSimpleFilter(fields[0], textGridFilter, compareOp);
        }
    }

    protected isCompositeFilter(fields: string[]): boolean {
        return fields.length > 1;
    }

    protected abstract buildSimpleFilter(field: string, gridFilter: TextGridFilter, compareOp: string): IServerFilter;

    protected abstract buildCompositeFilter(fields: string[], gridFilter: TextGridFilter): IServerFilter;
}
