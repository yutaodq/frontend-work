import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zy/model';


export const loadVehicle = createAction(
  '[Book Exists Guard] Load Book',
  props<{ id: string }>()
);

export const LoadSuccessAction = createAction(
  '[Book Exists Guard] Load Book Success',
  props<{ vehicle: Vehicle }>()
);

export const LoadFailAction = createAction(
  '[Book Exists Guard] Load Book Fail',
  props<{ error: any }>()
);

