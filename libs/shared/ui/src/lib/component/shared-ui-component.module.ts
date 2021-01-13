import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZY_BUTTON_EXPORTS, SharedUiButtonModule } from './button';
import { SharedUiDetailsInputModule, ZY_DETAILS_INPUT_EXPORTS } from './details-input/shared-ui-details-input.module';

export const COMPONENTS_EXPORTS: Array<any> = [
  ...ZY_BUTTON_EXPORTS,
  ...ZY_DETAILS_INPUT_EXPORTS
];

@NgModule({
  imports: [CommonModule,
    SharedUiButtonModule,
    SharedUiDetailsInputModule,
  ],
  declarations: [],
  exports: [COMPONENTS_EXPORTS],
  providers: []
})
export class SharedUiComponentModule {

}
