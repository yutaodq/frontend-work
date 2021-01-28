import { createAction, props } from '@ngrx/store';
import { VehicleUseType } from '@zy/model';


export const loadUseTypes = createAction('[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES');

export const loadUseTypesSuccess = createAction('[vehicleUseTypes] LOAD_VEHICLE_USE_TYPES_SUCCESS', props<{ useTypes: VehicleUseType[] }>());

export const loadUseTypesFail = createAction('[vehicleUseTypes] LOAD_LOAD_VEHICLE_USE_TYPES_FAIL', props<{ error: Error }>());
