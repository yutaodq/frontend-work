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
  on(CollectionPageActions.load, (state) => ({
    ...state,
    loading: true,
  })),
  on(CollectionApiActions.loadVehiclesSuccess, (state, { vehicles }) => ({
    loaded: true,
    loading: false,
    ids: vehicles.map((vehicle) => vehicle.id),
  })),
  on(CollectionApiActions.loadVehiclesFailure, (state, { error }) => ({
    loaded: true,
    loading: false,
    ids: [],
  })),

);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
