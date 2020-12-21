import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedVehicleDataAccesApiModule } from '@zy/shared/vehicle/data-acces-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromVehicles from './reducers';
import { CollectionEffects } from './effects';
@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesApiModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(fromVehicles.vehiclesFeatureKey, fromVehicles.reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([ CollectionEffects]),
  ],
})
export class SharedVehicleDataAccesModule {}
