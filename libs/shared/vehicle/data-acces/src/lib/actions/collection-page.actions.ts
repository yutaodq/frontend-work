import { createAction, props } from '@ngrx/store';

import { Vehicle } from '@zy/model';

/**
 * Load Collection Action
 */
export const loadCollection = createAction('[Collection Page] Load');

export const loadEntity = createAction(
  '[Vehicle Exists Guard] Load Vehicle',
  props<{ id: String }>()
);
