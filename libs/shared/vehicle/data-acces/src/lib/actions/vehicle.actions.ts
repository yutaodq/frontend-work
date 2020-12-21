import { createAction, props } from '@ngrx/store';

import { Vehicle } from '@example-app/books/models';

export const loadVehicle = createAction(
  '[Vehicle Exists Guard] Load Vehicle',
  props<{ vehicle: Vehicle }>()
);
