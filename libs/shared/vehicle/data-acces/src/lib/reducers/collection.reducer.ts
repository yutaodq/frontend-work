import { createReducer, on } from '@ngrx/store';

import {
  CollectionApiActions,
  CollectionPageActions,
  VehiclePageActions

} from '../actions';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  loadFailed:  boolean;
  query: string
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  loadFailed:  false,
  query: '',
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
    query:'',
    ids: vehicles.map((vehicle) => vehicle.id),
  })),
  on(CollectionApiActions.loadCollectionFailure, (state, { error }) => ({
    loaded: true,
    loading: false,
    loadFailed:  true,
    ids: [],
  })),
/*
  查询
 */
  on(CollectionPageActions.searchCollection, (state, { query }) => ({
    ...state,
    query: query
  })),

  // searchVehicle
  /**
   * 乐观删除.
   */
  on(   VehiclePageActions.removeVehicle,
    (state, { vehicle }) => ({
      ...state,
      ids: state.ids.filter((id) => id !== vehicle.id),
    })
  ),

/**
 * 删除失败
 */
on(VehiclePageActions.removeVehicleFailure,
  (state, { vehicle}) => {
    if (state.ids.indexOf(vehicle.id) > -1) {
      return state;
    }
    return {
      ...state,
      ids: [...state.ids, vehicle.id],
    };
  }
),

);

export const getCollectionLoaded = (state: State) => state.loaded;

export const getCollectionLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;

export const getCollectionLoadFailed = (state: State) => state.loadFailed;

export const getCollectionQuery = (state: State) => state.query;
