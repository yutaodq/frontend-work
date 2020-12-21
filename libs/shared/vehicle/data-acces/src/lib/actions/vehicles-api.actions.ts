import { createAction, props } from '@ngrx/store';

import { Vehicle } from '@example-app/books/models';

export const searchSuccess = createAction(
  '[Vehicles/API] Search Success',
  props<{ books: Vehicle[] }>()
);

export const searchFailure = createAction(
  '[Vehicles/API] Search Failure',
  props<{ errorMsg: string }>()
);
