import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchNgrxGridService, ThemePrimengModule } from '@zy/shared/util';
import { SharedUiComponentModule } from '@zy/shared/ui';
import { SharedUiGridModule } from '@zy/shared/ui-grid';

import { FormlyModule } from '@ngx-formly/core';

export const COMPONENTS_EXPORTS : Array<any> = [
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedUiGridModule,
    SharedUiComponentModule,
    ThemePrimengModule,
    FormlyModule,
    ReactiveFormsModule
  ],
  declarations: [
  ],
  exports: [...COMPONENTS_EXPORTS],

  entryComponents: [
  ]
})
export class VehicleFeatureUseTypeComponentsModule {}

