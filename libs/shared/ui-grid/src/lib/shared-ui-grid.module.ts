import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

// import { DATA_GRID_FILTER_COMPONENTS, DataGridFilterModule } from './filter/data-grid-filter.module';
// import { LoadingOverlayComponent, NoRowsOverlayComponent } from './components/overlay';
import { ButtonRenderedComponent, RendererComponent } from './components/renderer';
import { LoadingOverlayComponent, NoRowsOverlayComponent } from './components/overlay';
import { SortableHeaderComponent } from './components/header';

const COMPONENT = [
  RendererComponent,
  ButtonRenderedComponent,
  SortableHeaderComponent,
  NoRowsOverlayComponent,
  LoadingOverlayComponent,
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
// export const DATA_GRID_EXPORTS: Array<any> = [DataGrid];

const PROVIDERS = [];

@NgModule({
  imports: [IMPORTS_MODULES],
  // providers: [BaseComponentFactory],
  declarations: [...COMPONENT],
  exports: [...EXPORTS_MODULES ],
  entryComponents: [
    NoRowsOverlayComponent,
    LoadingOverlayComponent
  ],

})
export class SharedUiGridModule {}
