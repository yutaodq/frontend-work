import { Type } from '@angular/core';
import { GridFilter } from '..';
import { IServerFilter } from '@zy/shared/util';

export interface IFilterBuilder {
    build(fields: string[], gridFilter: GridFilter): IServerFilter;
}

export type GridFilterBuilderRegistryType = { readonly [type: string]: Type<IFilterBuilder> };
