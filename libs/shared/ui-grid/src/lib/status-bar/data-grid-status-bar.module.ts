import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataGridStatusBarComponent } from './data-grid-status-bar-component';
import { LfInputsModule } from 'zyapp/html-ui/input/lf-inputs.module';

export const DATA_GRID_STATUS_BAR_EXPORTS: Array<any> = [DataGridStatusBarComponent];

@NgModule({
    imports: [FormsModule, LfInputsModule],
    declarations: [DataGridStatusBarComponent],
    exports: [...DATA_GRID_STATUS_BAR_EXPORTS]
})
export class DataGridStatusBarModule {}
