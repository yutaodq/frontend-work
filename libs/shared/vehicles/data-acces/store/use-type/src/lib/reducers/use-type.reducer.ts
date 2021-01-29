/*
D:\学习案例\sx-tesoreria\src\app\egresos\store\reducers\pago-morralla.reducer.ts
 */

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { VehicleUseType } from '@zy/model';
import { createReducer, on } from '@ngrx/store';
import { VehicleUseTypeActions } from '../actions';

export const vehicleUseTypeFeatureKey = 'vehicleUseTypes';

export interface State extends EntityState<VehicleUseType> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<VehicleUseType> = createEntityAdapter<VehicleUseType>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false
});

export const reducer = createReducer(
  initialState,
  on(VehicleUseTypeActions.loadVehicleUseTypes,
    (state, {}) => ({
      ...state,
      loading: true
    })),
  on(VehicleUseTypeActions.loadVehicleUseTypesSuccess,
    (state, { useTypes }) => (
      adapter.addMany(useTypes, {
        ...state,
        loading: false,
        loaded: true
      }))
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getVehicleUseTypesLoading = (state: State) => state.loading;
export const getVehicleUseTypesLoaded = (state: State) => state.loaded;
