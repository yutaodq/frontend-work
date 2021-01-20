import { Vehicle } from '@zy/model';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromVehicles from './vehicles.reducer';
import * as fromCollection from './collection.reducer';
import * as fromRoot from '@zy/store';

export const vehiclesFeatureKey = 'vehicles';

export interface VehiclesState {
  [fromVehicles.vehiclesFeatureKey]: fromVehicles.State;
  [fromCollection.collectionFeatureKey]: fromCollection.State;
}

export interface State extends fromRoot.AppState {
  [vehiclesFeatureKey]: VehiclesState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: VehiclesState | undefined, action: Action) {
  return combineReducers({
    [fromVehicles.vehiclesFeatureKey]: fromVehicles.reducer,
    [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.booksState$ = state$.pipe(select(getVehiclesState));
 *   }
 * }
 * ```
 */


export const selectVehiclesState = createFeatureSelector<State, VehiclesState>(
  vehiclesFeatureKey
);

export const selectVehicleEntitiesState = createSelector(
  selectVehiclesState,
  (state) => state.vehicles
);

export const selectSelectedVehicleId = createSelector(
  selectVehicleEntitiesState,
  fromVehicles.getId
);

export const selectVehicleRemoveSuccess = createSelector(
  selectVehicleEntitiesState,
  fromVehicles.getVehicleRemoveSuccess
);

export const {
  selectIds: selectVehicleIds,
  selectEntities: selectVehicleEntities,
  selectAll: selectAllVehicles,
  selectTotal: selectTotalVehicles,
} = fromVehicles.adapter.getSelectors(selectVehicleEntitiesState);
/*
   return a || b;
   return a && b;
   return a , b , c;
 */
// Vehicle Detail
export const selectSelectedVehicle = createSelector(
  selectVehicleEntities,
  selectSelectedVehicleId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

/*
Collection
 */

export const selectCollectionState = createSelector(
  selectVehiclesState,
  (state) => state.collection
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromCollection.getCollectionLoaded
);
export const selectCollectionLoading = createSelector(
  selectCollectionState,
  fromCollection.getCollectionLoading
);

export const getCollectionLoadFailed = createSelector(
  selectCollectionState,
  fromCollection.getCollectionLoadFailed
);

export const selectCollectionVehicleIds = createSelector(
  selectCollectionState,
  fromCollection.getIds
);

// vehicle List
export const selectVehicleCollection = createSelector(
  selectVehicleEntities,
  selectCollectionVehicleIds,
  (entities, ids) => {
    return ids
      .map((id) => entities[id])
      .filter((vehicle): vehicle is Vehicle => vehicle != null);
  }
);

