import { Type } from '@angular/core';

import { GridFilter } from 'zyapp/grid/filter';
import { IServerFilter } from 'zyapp/base-ui/service';

export interface IFilterBuilder {
    build(fields: string[], gridFilter: GridFilter): IServerFilter;
}

export type GridFilterBuilderRegistryType = { readonly [type: string]: Type<IFilterBuilder> };
