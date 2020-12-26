import { createReducer, on } from '@ngrx/store';

import {
  CollectionApiActions,
  CollectionPageActions,
  SelectedVehiclePageActions,
} from '../actions';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export const reducer = createReducer(
  initialState,
  on(CollectionPageActions.enter, (state) => ({
    ...state,
    loading: true,
  })),
  on(CollectionApiActions.loadVehiclesSuccess, (state, { vehicles }) => ({
    loaded: true,
    loading: false,
    ids: vehicles.map((vehicle) => vehicle.id),
  })),
  /**
   * Optimistically add vehicles to collection.
   * If this succeeds there's nothing to do.
   * If this fails we revert state by removing the vehicles.
   *
   * `on` supports handling multiple types of actions
   */
  on(
    SelectedVehiclePageActions.addVehicle,
    CollectionApiActions.removeVehicleFailure,
    (state, { vehicle }) => {
      if (state.ids.indexOf(vehicle.id) > -1) {
        return state;
      }
      return {
        ...state,
        ids: [...state.ids, vehicle.id],
      };
    }
  ),
  /**
   * Optimistically remove vehicles from collection.
   * If addVehicle fails, we "undo" adding the vehicles.
   */
  on(
    SelectedVehiclePageActions.removeVehicle,
    CollectionApiActions.addVehicleFailure,
    (state, { vehicle }) => ({
      ...state,
      ids: state.ids.filter((id) => id !== vehicle.id),
    })
  )
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
