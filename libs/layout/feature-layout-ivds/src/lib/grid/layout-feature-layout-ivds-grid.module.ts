import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

const EXPORTS_MODULES = [
  AgGridModule
];


@NgModule({
  imports: [
  ],
  exports: [
    ...EXPORTS_MODULES
  ],
})
export class LayoutFeatureLayoutIvdsGridModule {
}
