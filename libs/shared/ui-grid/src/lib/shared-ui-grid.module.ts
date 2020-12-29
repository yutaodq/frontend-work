import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

// import { DATA_GRID_FILTER_COMPONENTS, DataGridFilterModule } from './filter/data-grid-filter.module';
// import { LoadingOverlayComponent, NoRowsOverlayComponent } from './components/overlay';
import { ButtonRenderedComponent, RendererComponent } from './components/renderer';
// import { SortableHeaderComponent } from './components/header';
// import { GridRowDetailModule } from './row-detail';

const COMPONENT = [
  RendererComponent,
  ButtonRenderedComponent,
  // SortableHeaderComponent,
  // NoRowsOverlayComponent,
  // LoadingOverlayComponent,
];
const IMPORTS_MODULES = [
  CommonModule,
  FormsModule,
  // DataGridFilterModule,
  // GridRowDetailModule,
  AgGridModule.withComponents(
    [...COMPONENT]),
];
const EXPORTS_MODULES = [
  AgGridModule,
];
const PROVIDERS = [];

@NgModule({
  imports: [IMPORTS_MODULES],
  providers: [],
  declarations: [...COMPONENT],
  exports: [...EXPORTS_MODULES ],
  entryComponents: [
    // NoRowsOverlayComponent,
    // LoadingOverlayComponent
  ],
})
export class SharedUiGridModule {}
