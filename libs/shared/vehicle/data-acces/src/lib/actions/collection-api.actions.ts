import { createAction, props } from '@ngrx/store';
import { Vehicle } from '@zy/model';


/**
 * Load Collection Actions
 */
export const loadCollectionSuccess = createAction(
  '[Collection/API] Load Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);

export const loadCollectionFailure = createAction(
  '[Collection/API] Load Vehicles Failure',
  props<{ error: any }>()
);
