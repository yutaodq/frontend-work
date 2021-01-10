import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zy/model';

export const selectVehicle = createAction(
  '[View Vehicle Page] Select Vehicle',
  props<{ vehicle: Vehicle }>()
);
