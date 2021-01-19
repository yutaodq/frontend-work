import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  CollectionApiActions, CollectionPageActions
} from '../actions';
import { Vehicle } from '@zy/model';

export const vehiclesFeatureKey = 'vehicles';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Vehicle> {
  selectedVehicleId: string | null;
  loading: boolean;
  loaded:  boolean;
  loadFailed:  boolean;
}

/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>({
  selectId: (vehicle: Vehicle) => vehicle.id,
  sortComparer: false,
});

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
  selectedVehicleId: null,
  loading: false,
  loaded:  false,
  loadFailed:  false,
});

export const reducer = createReducer(
  initialState,
  /**
   * The addMany function provided by the created adapter
   * adds many records to the entity dictionary
   * and returns a new state including those records. If
   * the collection is to be sorted, the adapter will
   * sort each record upon entry into the sorted array.
   */
  on(
    CollectionApiActions.loadCollectionSuccess,
    (state, { vehicles }) => adapter.addMany(vehicles, state)
  ),
  /**
   * The addOne function provided by the created adapter
   * adds one record to the entity dictionary
   * and returns a new state including that records if it doesn't
   * exist already. If the collection is to be sorted, the adapter will
   * insert the new record into the sorted array.
   */
  // on(VehicleActions.loadVehicle, (state, { vehicle }) =>
  //   adapter.addOne(vehicle, state)
  // ),
  on(CollectionPageActions.selectEntity, (state, { id }) => ({
    ...state,
    selectedVehicleId: id,
  }))
);


export const selectId = (state: State) => state.selectedVehicleId;
