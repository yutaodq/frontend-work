import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
import {
  catchError,
  mergeMap,
  map,
} from 'rxjs/operators';

import { Vehicle } from '@zy/model';
import {
  VehiclePageActions
} from '../actions';
import { VehiclesApiClient } from '@zy/shared/vehicle/data-acces-api';


@Injectable()
export class VehicleEffects {

  removeVehicleFromDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclePageActions.removeVehicle),
      mergeMap(({ vehicle }) =>
        this.apiClient.getRemoveVehicle(vehicle.id).pipe(
          map(() => VehiclePageActions.removeVehicleSuccess({ vehicle , removeSuccess: true })),
          catchError(() => of(VehiclePageActions.removeVehicleFailure({ vehicle, removeSuccess: false })))
        )
      )
    )
  );

  // this.apiClient.getRemoveVehicle(vehicle.id).pipe(
  // this.apiClient.getCreateVehicle(vehicle).pipe(

  addVehicleToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclePageActions.createVehicle),
      mergeMap(({ vehicle }) =>
        this.apiClient.create(vehicle).pipe(
          map(() => VehiclePageActions.createVehicleSuccess( {vehicle} )),
          catchError(() => of(VehiclePageActions.createVehicleFailure({ vehicle })))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private apiClient: VehiclesApiClient
  ) {}
}
