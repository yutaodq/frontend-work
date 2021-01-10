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

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const selectVehiclesState = createFeatureSelector<State, VehiclesState>(
  vehiclesFeatureKey
);

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const selectVehicleEntitiesState = createSelector(
  selectVehiclesState,
  (state) => state.vehicles
);

export const selectSelectedVehicleId = createSelector(
  selectVehicleEntitiesState,
  fromVehicles.selectId
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
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
export const selectSelectedVehicle = createSelector(
  selectVehicleEntities,
  selectSelectedVehicleId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);


export const selectCollectionState = createSelector(
  selectVehiclesState,
  (state) => state.collection
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  selectCollectionState,
  fromCollection.getLoading
);

export const getCollectionLoadFailed = createSelector(
  selectCollectionState,
  fromCollection.getLoadFailed
);

export const selectCollectionVehicleIds = createSelector(
  selectCollectionState,
  fromCollection.getIds
);

export const selectVehicleCollection = createSelector(
  selectVehicleEntities,
  selectCollectionVehicleIds,
  (entities, ids) => {
    return ids
      .map((id) => entities[id])
      .filter((vehicle): vehicle is Vehicle => vehicle != null);
  }
);

// export const isSelectedVehicleInCollection = createSelector(
//   selectCollectionVehicleIds,
//   selectSelectedVehicleId,
//   (ids, selected) => {
//     return !!selected && ids.indexOf(selected) > -1;
//   }
// );
