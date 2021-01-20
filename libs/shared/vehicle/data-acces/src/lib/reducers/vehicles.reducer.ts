import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  CollectionApiActions, CollectionPageActions
} from '../actions';
import { Vehicle } from '@zy/model';

export const vehiclesFeatureKey = 'vehicles';

export interface State extends EntityState<Vehicle> {
  selectedVehicleId: string | null;
  loading: boolean;
  loaded:  boolean;
  loadFailed:  boolean;
  removeSuccess: boolean;
}
export const adapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>({
  selectId: (vehicle: Vehicle) => vehicle.id,
  sortComparer: false,
});
export const initialState: State = adapter.getInitialState({
  selectedVehicleId: null,
  loading: false,
  loaded:  false,
  loadFailed:  false,
  removeSuccess: false,

});

export const reducer = createReducer(
  initialState,
   on(
    CollectionApiActions.loadCollectionSuccess,
    (state, { vehicles }) => adapter.addMany(vehicles, state)
  ),
  on(CollectionPageActions.selectVehicle, (state, { id }) => ({
    ...state,
    selectedVehicleId: id,
  }))
);

export const selectId = (state: State) => state.selectedVehicleId;

export const getVehicleLoaded = (state: State) => state.loaded;

export const getVehicleLoading = (state: State) => state.loading;

export const getVehicleLoadFailed = (state: State) => state.loadFailed;
