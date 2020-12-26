import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  CollectionApiActions,
  CollectionPageActions,
  SelectedVehiclePageActions,
} from '../actions';
import { Vehicle } from '@zy/model';
import { VehiclesApiClient } from '@zy/shared/vehicle/data-acces-api';

@Injectable()
export class CollectionEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the supported call in `defer` makes
   * effect easier to test.
   */
  // checkStorageSupport$ = createEffect(
  //   () => defer(() => this.apiClient.supported()),
  //   { dispatch: false }
  // );

  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionPageActions.enter),
      switchMap(() =>
        this.apiClient.getCollection().pipe(
          map((vehicles: Vehicle[]) =>
            CollectionApiActions.loadVehiclesSuccess({ vehicles })
          ),
          catchError((error) =>
            of(CollectionApiActions.loadVehiclesFailure({ error }))
          )
        )
      )
    )
  );

  // addVehicleToCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SelectedVehiclePageActions.addVehicle),
  //     mergeMap(({ vehicles }) =>
  //       this.apiClient.addToCollection([vehicles]).pipe(
  //         map(() => CollectionApiActions.addVehicleSuccess({ vehicles })),
  //         catchError(() => of(CollectionApiActions.addVehicleFailure({ vehicles })))
  //       )
  //     )
  //   )
  // );

  // removeVehicleFromCollection$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(SelectedVehiclePageActions.removeVehicle),
  //     mergeMap(({ vehicles }) =>
  //       this.apiClient.removeFromCollection([vehicles.id]).pipe(
  //         map(() => CollectionApiActions.removeVehicleSuccess({ vehicles })),
  //         catchError(() => of(CollectionApiActions.removeVehicleFailure({ vehicles })))
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private apiClient: VehiclesApiClient
  ) {}
}
