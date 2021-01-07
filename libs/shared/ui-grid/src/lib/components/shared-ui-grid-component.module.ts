import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ButtonRenderedComponent, RendererComponent } from './renderer';
import { LoadingOverlayComponent, NoRowsOverlayComponent } from './overlay';

const COMPONENT = [
  SearchComponent,
  RendererComponent,
  ButtonRenderedComponent,
  NoRowsOverlayComponent,
  LoadingOverlayComponent,
];
const EXPORTS_COMPONENT = [
  SearchComponent,
  RendererComponent,
  ButtonRenderedComponent,
  NoRowsOverlayComponent,
  LoadingOverlayComponent,
];

const IMPORTS_MODULES = [
  CommonModule,
  FormsModule,
];
const EXPORTS_MODULES = [
];

const PROVIDERS = [];

@NgModule({
  imports: [IMPORTS_MODULES],
  // providers: [BaseComponentFactory],
  declarations: [...COMPONENT],
  exports: [...EXPORTS_MODULES, ...EXPORTS_COMPONENT ],
  entryComponents: [
    NoRowsOverlayComponent,
    LoadingOverlayComponent
  ],

})
export class SharedUiGridComponentModule {}
