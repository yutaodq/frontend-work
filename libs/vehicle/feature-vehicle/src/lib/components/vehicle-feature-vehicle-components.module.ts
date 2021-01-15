import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule}  from '@angular/forms';

import { ThemePrimengModule } from '@zy/shared/util';
import { SharedUiComponentModule } from '@zy/shared/ui';
import { SharedUiGridModule } from '@zy/shared/ui-grid';

import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';
import { VehiclesGridComponent } from './grid/vehicles-grid.component';
import { VehicleDetailsToolbarComponent } from './vehicle-details-toolbar/vehicle-details-toolbar.component';
import { VehicleDetailsFormComponent } from './vehicle-details-form/vehicle-details-form.component';
import { VehicleDeleteDialogComponent } from './vehicle-delete-dialog/vehicle-delete-dialog.component';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleDetailsFormComponent,
  VehicleDetailsToolbarComponent,
  VehiclesGridComponent,
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
  ],
  declarations: [
    VehicleDetailsFormComponent,
    VehicleDetailsToolbarComponent,
    VehiclesGridComponent,
    VehicleDeleteDialogComponent,
  ],
  exports: [...COMPONENTS_EXPORTS],

  providers: [ ]
})
export class VehicleFeatureVehicleComponentsModule {}

