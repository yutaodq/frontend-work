import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zy/model';

export const searchSuccess = createAction(
  '[Vehicles/API] Search Success',
  props<{ vehicles: Vehicle[] }>()
);

export const searchFailure = createAction(
  '[Vehicles/API] Search Failure',
  props<{ errorMsg: string }>()
);
