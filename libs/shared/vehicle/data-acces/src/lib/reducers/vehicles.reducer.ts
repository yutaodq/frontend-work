import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  CollectionApiActions, CollectionPageActions, VehiclePageActions
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
    removeSuccess: false,
    selectedVehicleId: id,
  })),
  /**
   * 添加 Vehicle
   */
  on(VehiclePageActions.createVehicle, (state, { vehicle }) => adapter.addOne(vehicle, state)),

  /**
   * 删除失败
   */
  on(VehiclePageActions.removeVehicleFailure,(state, { vehicle, removeSuccess}) => ({
        ...state,
        removeSuccess: removeSuccess
      }
   )),
  /**
   * 删除成功
   */
  on(VehiclePageActions.removeVehicleSuccess,(state, { vehicle, removeSuccess}) => ({
      ...state,
      removeSuccess: removeSuccess
    }
  )),


);

export const getId = (state: State) => state.selectedVehicleId;

export const getVehicleLoaded = (state: State) => state.loaded;

export const getVehicleLoading = (state: State) => state.loading;

export const getVehicleLoadFailed = (state: State) => state.loadFailed;

export const getVehicleRemoveSuccess = (state: State) => state.removeSuccess;

