import { createReducer, on } from '@ngrx/store';

import {
  CollectionApiActions,
  CollectionPageActions,
} from '../actions';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  loadFailed:  boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  loadFailed:  false,
  ids: [],
};

export const reducer = createReducer(
  initialState,
  on(CollectionPageActions.loadCollection, (state) => ({
    ...state,
    loaded: false,
    loading: true,
    loadFailed:  false,
    ids: [],
  })),
  on(CollectionApiActions.loadCollectionSuccess, (state, { vehicles }) => ({
    loaded: true,
    loading: false,
    loadFailed:  false,
    ids: vehicles.map((vehicle) => vehicle.id),
  })),
  on(CollectionApiActions.loadCollectionFailure, (state, { error }) => ({
    loaded: true,
    loading: false,
    loadFailed:  true,
    ids: [],
  })),

);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;

export const getLoadFailed = (state: State) => state.loadFailed;
