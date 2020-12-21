import { createAction, props } from '@ngrx/store';

export const searchVehicles = createAction(
  '[Find Vehicle Page] Search Vehicles',
  props<{ query: string }>()
);
