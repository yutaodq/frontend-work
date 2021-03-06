import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchNgrxGridService, ThemePrimengModule } from '@zy/shared/util';
import { SharedUiComponentModule } from '@zy/shared/ui';
import { SharedUiGridModule } from '@zy/shared/ui-grid';

import { SharedVehicleDataAccesFacadeModule, VehicleSearchNgrxGridService } from '@zy/shared/vehicle/data-acces-facade';
import { VehiclesGridComponent } from './grid/vehicles-grid.component';
import { VehicleDetailsToolbarComponent } from './vehicle-details-toolbar/vehicle-details-toolbar.component';
import { VehicleDetailsFormComponent } from './vehicle-details-form/vehicle-details-form.component';
import { VehicleDeleteDialogComponent } from './vehicle-delete-dialog/vehicle-delete-dialog.component';
import { VehicleCreateFormComponent } from './vehicle-create-form/vehicle-create-form.component';
import { VehiclesResolver } from '../guard/vehicles.resolve';
import { FormlyModule } from '@ngx-formly/core';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleDetailsFormComponent,
  VehicleDetailsToolbarComponent,
  VehiclesGridComponent,
  VehicleCreateFormComponent,
  VehicleDeleteDialogComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedVehicleDataAccesFacadeModule,
    TranslateModule,
    SharedUiGridModule,
    SharedUiComponentModule,
    ThemePrimengModule,
    FormlyModule,
    ReactiveFormsModule
  ],
  declarations: [
    VehicleDetailsFormComponent,
    VehicleDetailsToolbarComponent,
    VehiclesGridComponent,
    VehicleDeleteDialogComponent,
    VehicleCreateFormComponent,
  ],
  exports: [...COMPONENTS_EXPORTS],

  entryComponents: [
    VehicleDeleteDialogComponent
  ]
})
export class VehicleFeatureVehicleComponentsModule {}

