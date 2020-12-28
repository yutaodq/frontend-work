import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LfButtonModule } from 'zyapp/html-ui/button/lf-button.module';
import { LfInputsModule } from 'zyapp/html-ui/input/lf-inputs.module';
import { LfFormsModule } from 'zyapp/html-ui/form/lf-forms.module';
import { PipeModule } from 'zyapp/base-ui/util/pipe/pipe.module';
import { TextFilterComponent } from 'zyapp/grid/filter/text-filter/text-filter.component';
import { NumericFilterComponent } from 'zyapp/grid/filter/numeric-filter/numeric-filter.component';
import { DateFilterComponent } from 'zyapp/grid/filter/date-filter/date-filter.component';
import { ServerFilterModelBuilder } from 'zyapp/grid/filter/builder';

export const DATA_GRID_FILTER_COMPONENTS: Array<any> = [
    TextFilterComponent,
    // NumericFilterComponent,
    // DateFilterComponent
];

@NgModule({
    imports: [CommonModule, FormsModule, LfButtonModule, LfFormsModule, LfInputsModule, PipeModule],
    declarations: [TextFilterComponent, NumericFilterComponent, DateFilterComponent],
    exports: [...DATA_GRID_FILTER_COMPONENTS],
    providers: [ServerFilterModelBuilder]
})
export class DataGridFilterModule {}
