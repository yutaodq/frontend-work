import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { ButtonRenderedComponent, RendererComponent } from './components/renderer';
import { LoadingOverlayComponent, NoRowsOverlayComponent } from './components/overlay';
// import { SortableHeaderComponent } from './components/header';
import { DataGrid } from './data-grid';

const COMPONENT = [
  RendererComponent,
  ButtonRenderedComponent,
  // SortableHeaderComponent,
  NoRowsOverlayComponent,
  LoadingOverlayComponent,
  DataGrid
];
const IMPORTS_MODULES = [
  CommonModule,
  FormsModule,
  AgGridModule.withComponents(
    [...COMPONENT]),
];
const EXPORTS_MODULES = [
  AgGridModule,
];
export const DATA_GRID_EXPORTS: Array<any> = [DataGrid];

const PROVIDERS = [];

@NgModule({
  imports: [IMPORTS_MODULES],
  // providers: [BaseComponentFactory],
  declarations: [...COMPONENT],
  exports: [...EXPORTS_MODULES, DATA_GRID_EXPORTS ],
  entryComponents: [
    NoRowsOverlayComponent,
    LoadingOverlayComponent
  ],

})
export class SharedUiGridModule {}
