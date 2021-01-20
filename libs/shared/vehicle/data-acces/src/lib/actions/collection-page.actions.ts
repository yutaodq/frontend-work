import { createAction, props } from '@ngrx/store';

/**
 * Load Collection Action
 */
export const loadCollection = createAction('[Collection Page] Load');

export const selectVehicle = createAction(
  '[Vehicle Exists Guard] Select Vehicle',
  props<{ id: String }>()
);

export const searchCollection = createAction(
  '[Collection Page] Search Vehicle',
  props<{ query: string }>()
);

export const searchCollectionClear = createAction(
  '[Collection Page] Search Vehicle Clear',
  // props<{ query: string }>()
);
