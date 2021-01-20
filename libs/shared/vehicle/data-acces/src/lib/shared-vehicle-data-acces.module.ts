import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedVehicleDataAccesApiModule } from '@zy/shared/vehicle/data-acces-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicles from './reducers';
import { CollectionEffects, VehicleEffects } from './effects';
@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesApiModule,
    StoreModule.forFeature(fromVehicles.vehiclesFeatureKey, fromVehicles.reducers),
    EffectsModule.forFeature([ CollectionEffects, VehicleEffects]),
  ],
})
export class SharedVehicleDataAccesModule {}
