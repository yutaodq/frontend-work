// import { Injectable } from '@angular/core';
//
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { defer, of } from 'rxjs';
// import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
//
// import {
//   VehicleUseTypeActions,
// } from '../actions';
// import { Vehicle } from '@zy/model';
// import { VehiclesApiClient } from '@zy/shared/vehicle/data-acces-api';
//
// @Injectable()
// export class VehicleUseTypeEffects {
//
//   loadCollection$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(CollectionPageActions.loadCollection),
//       switchMap(() =>
//         this.apiClient.getCollection().pipe(
//           map((vehicles: Vehicle[]) =>
//             CollectionApiActions.loadCollectionSuccess({ vehicles })
//           ),
//           catchError((error) =>
//             of(CollectionApiActions.loadCollectionFailure({ error }))
//           )
//         )
//       )
//     )
//   );
//
//
//   constructor(
//     private actions$: Actions,
//     private apiClient: VehiclesApiClient
//   ) {}
// }
