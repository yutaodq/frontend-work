import { createAction, props } from '@ngrx/store';

import { Vehicle } from '@zy/model';

/**
 * Load Collection Action
 */
export const loadCollection = createAction('[Collection Page] Load');

export const selectVehicle = createAction(
  '[Vehicle Exists Guard] Select Vehicle',
  props<{ id: String }>()
);
