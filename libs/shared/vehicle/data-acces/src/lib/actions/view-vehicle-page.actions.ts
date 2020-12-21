import { createAction, props } from '@ngrx/store';

export const selectVehicle = createAction(
  '[View Vehicle Page] Select Vehicle',
  props<{ id: string }>()
);
