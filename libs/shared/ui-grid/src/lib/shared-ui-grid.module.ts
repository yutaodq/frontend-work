import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

const EXPORTS_MODULES = [
  AgGridModule
];


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORTS_MODULES
  ],
})

export class SharedUiGridModule {}
