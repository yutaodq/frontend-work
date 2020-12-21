import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  CollectionApiActions,
  CollectionPageActions,
  SelectedVehiclePageActions,
} from '@example-app/books/actions';
import { Vehicle } from '@example-app/books/models';
import { VehicleStorageService } from '@example-app/core/services';

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
  checkStorageSupport$ = createEffect(
    () => defer(() => this.storageService.supported()),
    { dispatch: false }
  );

  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CollectionPageActions.enter),
      switchMap(() =>
        this.storageService.getCollection().pipe(
          map((books: Vehicle[]) =>
            CollectionApiActions.loadVehiclesSuccess({ books })
          ),
          catchError((error) =>
            of(CollectionApiActions.loadVehiclesFailure({ error }))
          )
        )
      )
    )
  );

  addVehicleToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SelectedVehiclePageActions.addVehicle),
      mergeMap(({ vehicle }) =>
        this.storageService.addToCollection([vehicle]).pipe(
          map(() => CollectionApiActions.addVehicleSuccess({ vehicle })),
          catchError(() => of(CollectionApiActions.addVehicleFailure({ vehicle })))
        )
      )
    )
  );

  removeVehicleFromCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SelectedVehiclePageActions.removeVehicle),
      mergeMap(({ vehicle }) =>
        this.storageService.removeFromCollection([vehicle.id]).pipe(
          map(() => CollectionApiActions.removeVehicleSuccess({ vehicle })),
          catchError(() => of(CollectionApiActions.removeVehicleFailure({ vehicle })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private storageService: VehicleStorageService
  ) {}
}
