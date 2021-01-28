import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedVehicleDataAccesApiModule } from '@zy/shared/vehicle/data-acces-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicleUseType from './reducers';
@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesApiModule,
    StoreModule.forFeature(fromVehicleUseType.vehicleUseTypeFeatureKey, fromVehicleUseType.reducers),
    EffectsModule.forFeature([ ]),
  ],
})
export class SharedVehicleUseTypeDataAccesModule {}
