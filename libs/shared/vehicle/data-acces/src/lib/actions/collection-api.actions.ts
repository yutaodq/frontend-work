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

/**
 * Load Entity Actions
 */
export const loadEntitySuccess = createAction(
  '[Entity/API] Load Vehicle Success',
  props<{ vehicle: Vehicle }>()
);

export const loadEntityFailure = createAction(
  '[Entity/API] Load Vehicle Failure',
  props<{ error: any }>()
);
