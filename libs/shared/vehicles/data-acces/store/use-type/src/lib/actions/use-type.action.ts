import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zy/model';


export const loadVehicleUseTypes = createAction('[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES');

export const loadVehicleUseTypesSuccess = createAction('[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES_SUCCESS', props<{ useTypes: VehicleUseType[] }>());

export const loadVehicleUseTypesFail = createAction('[vehicleUseTypes] LOAD_LOAD_VEHICLE_USE_TYPES_FAIL', props<{ error: Error }>());
