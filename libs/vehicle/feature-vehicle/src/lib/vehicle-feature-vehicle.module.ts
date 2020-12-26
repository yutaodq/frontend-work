import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';

import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';
import { LayoutFeatureLayoutIvdsGridModule } from '@zy/layout/feature-layout-ivds';

import { VehicleFeatureVehicleRouting } from './vehicle-feature-vehicle-routing.module';

import { VehiclesComponent } from './containers/vehicles/vehicles.component';
import { VehicleDetailsComponent } from './containers/vehicle-details/vehicle-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesFacadeModule,
    VehicleFeatureVehicleRouting,
    TranslateModule,
    LayoutFeatureLayoutIvdsGridModule,
    InputTextModule
  ],
  declarations: [VehiclesComponent, VehicleDetailsComponent],
})
export class VehicleFeatureVehicleModule {}
