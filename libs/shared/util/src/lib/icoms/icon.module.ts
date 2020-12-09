import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';

import { fontAwesomeIcons } from './font-awesome-icons';


const EXPORTS_MODULES = [FontAwesomeModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  providers: [],
  exports: [...EXPORTS_MODULES],
})
export class IconModule {
  constructor(library: FaIconLibrary) {
    config.autoAddCss = false;
    library.addIcons(...fontAwesomeIcons);
  }
}
