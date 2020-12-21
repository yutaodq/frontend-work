import { createAction, props } from '@ngrx/store';

import { Vehicle } from '@example-app/books/models';

/**
 * Add Vehicle to Collection Action
 */
export const addVehicle = createAction(
  '[Selected Vehicle Page] Add Vehicle',
  props<{ vehicle: Vehicle }>()
);

/**
 * Remove Vehicle from Collection Action
 */
export const removeVehicle = createAction(
  '[Selected Vehicle Page] Remove Vehicle',
  props<{ vehicle: Vehicle }>()
);
