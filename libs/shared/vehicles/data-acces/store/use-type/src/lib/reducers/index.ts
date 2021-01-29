import { Vehicle } from '@zy/model';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action
} from '@ngrx/store';
import * as fromVehicleUseType from './use-type.reducer';
import * as fromRoot from '@zy/store';
import { vehiclesFeatureKey, VehiclesState } from '@zy/shared/vehicle/data-acces';

export const vehicleUseTypeFeatureKey = 'vehicleUseTypes';

export interface VehiclesUseTypeState {
  [fromVehicleUseType.vehicleUseTypeFeatureKey]: fromVehicleUseType.State;
}

export interface State extends fromRoot.AppState {
  [vehicleUseTypeFeatureKey]: VehiclesUseTypeState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: VehiclesUseTypeState | undefined, action: Action) {
  return combineReducers({
    [fromVehicleUseType.vehicleUseTypeFeatureKey]: fromVehicleUseType.reducer
  })(state, action);
}

export const getState = createFeatureSelector<State, VehiclesUseTypeState>(vehicleUseTypeFeatureKey);

export const getVehicleUseTypesState = createSelector(
  getState,
  (state) => state.vehicleUseTypes
);
