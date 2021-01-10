import { createAction, props } from '@ngrx/store';

import { Vehicle } from '@zy/model';

/**
 * Load Collection Action
 */
export const loadCollection = createAction('[Collection Page] Load');

export const loadVehicle = createAction(
  '[Vehicle Exists Guard] Load Vehicle',
  props<{ id: String }>()
);
