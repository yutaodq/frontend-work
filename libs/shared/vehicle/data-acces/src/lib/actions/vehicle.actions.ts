import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zy/model';

/**
 * Remove Vehicle  Actions
 */

export const removeVehicle = createAction(
  '[Selected Vehicle Page] Remove Vehicle',
  props<{ vehicle: Vehicle }>()
);
export const removeVehicleSuccess = createAction(
  '[Selected Vehicle Page] Remove Vehicle Success',
  props<{ vehicle: Vehicle, removeSuccess: boolean }>()
);

export const removeVehicleFailure = createAction(
  '[Selected Vehicle Page] Remove Vehicle Failure',
  props<{ vehicle: Vehicle, removeSuccess: boolean }>()
);

/**
 * Load Vehicle  Actions
 */

export const loadVehicle = createAction(
  '[Vehicle Exists Guard] Load Vehicle',
  props<{ id: string }>()
);

// export const loadSuccessAction = createAction(
//   '[Vehicle Exists Guard] Load Vehicle Success',
//   props<{ vehicle: Vehicle }>()
// );
//
// export const loadFailAction = createAction(
//   '[Vehicle Exists Guard] Load Vehicle Fail',
//   props<{ error: any }>()
// );
//
