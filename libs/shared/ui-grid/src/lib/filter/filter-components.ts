import { TextFilterComponent } from 'zyapp/grid/filter/text-filter/text-filter.component';
import { NumericFilterComponent } from 'zyapp/grid/filter/numeric-filter/numeric-filter.component';
import { DateFilterComponent } from 'zyapp/grid/filter/date-filter/date-filter.component';

export const GridFilterFrameworkComponents = {
    textFilterComponent: TextFilterComponent as any,
    // numericFilterComponent: NumericFilterComponent as any,
    // dateFilterComponent: DateFilterComponent as any
};

export const GridFilterFrameworkComponentType = {
    TextFilter: 'textFilterComponent',
    NumericFilter: 'numericFilterComponent',
    DateFilter: 'dateFilterComponent'
};
