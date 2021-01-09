import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZY_BUTTON_EXPORTS, ZyButtonModule } from './button';

export const COMPONENTS_EXPORTS: Array<any> = [
  ...ZY_BUTTON_EXPORTS
];

@NgModule({
  imports: [CommonModule,
    ZyButtonModule,
  ],
  declarations: [],
  exports: [COMPONENTS_EXPORTS],
  providers: []
})
export class SharedUiComponentModule {

}
