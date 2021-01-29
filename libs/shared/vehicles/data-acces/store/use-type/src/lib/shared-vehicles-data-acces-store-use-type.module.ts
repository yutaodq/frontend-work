import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedVehicleDataAccesApiModule } from '@zy/shared/vehicle/data-acces-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicleUseType from './reducers';
import { VehicleUseTypeEffects } from './effects';
@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesApiModule,
    StoreModule.forFeature(fromVehicleUseType.vehicleUseTypeFeatureKey, fromVehicleUseType.reducers),
    EffectsModule.forFeature([VehicleUseTypeEffects ]),
  ],
})
export class SharedVehiclesDataAccesStoreUseTypeModule {}
