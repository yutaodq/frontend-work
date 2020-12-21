import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zy/model';


/**
 * Add Vehicle to Collection Actions
 */
export const addVehicleSuccess = createAction(
  '[Collection/API] Add Vehicle Success',
  props<{ vehicle: Vehicle }>()
);

export const addVehicleFailure = createAction(
  '[Collection/API] Add Vehicle Failure',
  props<{ vehicle: Vehicle }>()
);

/**
 * Remove Vehicle from Collection Actions
 */
export const removeVehicleSuccess = createAction(
  '[Collection/API] Remove Vehicle Success',
  props<{ vehicle: Vehicle }>()
);

export const removeVehicleFailure = createAction(
  '[Collection/API] Remove Vehicle Failure',
  props<{ vehicle: Vehicle }>()
);

/**
 * Load Collection Actions
 */
export const loadVehiclesSuccess = createAction(
  '[Collection/API] Load Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);

export const loadVehiclesFailure = createAction(
  '[Collection/API] Load Vehicles Failure',
  props<{ error: any }>()
);
