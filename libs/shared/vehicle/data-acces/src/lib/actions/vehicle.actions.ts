import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zy/model';


export const loadVehicle = createAction(
  '[Vehicle Exists Guard] Load Vehicle',
  props<{ vehicle: Vehicle }>()
);
