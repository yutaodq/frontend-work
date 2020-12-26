// import { Injectable } from '@angular/core';
//
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
// import {
//   catchError,
//   debounceTime,
//   map,
//   skip,
//   switchMap,
//   takeUntil,
// } from 'rxjs/operators';
//
// import { Vehicle } from '@zy/model';
// import {
//   VehiclesApiActions,
//   FindVehiclePageActions,
// } from '../actions';
// import { VehiclesApiClient } from '@zy/shared/vehicles/data-acces-api';
//
// /**
//  * Effects offer a way to isolate and easily test side-effects within your
//  * application.
//  *
//  * If you are unfamiliar with the operators being used in these examples, please
//  * check out the sources below:
//  *
//  * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
//  * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
//  */
//
// @Injectable()
// export class VehicleEffects {
//   search$ = createEffect(
//     () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
//       this.actions$.pipe(
//         ofType(FindVehiclePageActions.searchVehicles),
//         debounceTime(debounce, scheduler),
//         switchMap(({ query }) => {
//           if (query === '') {
//             return empty;
//           }
//
//           const nextSearch$ = this.actions$.pipe(
//             ofType(FindVehiclePageActions.searchVehicles),
//             skip(1)
//           );
//
//           return this.googleVehicles.searchVehicles(query).pipe(
//             takeUntil(nextSearch$),
//             map((books: Vehicle[]) => VehiclesApiActions.searchSuccess({ books })),
//             catchError((err) =>
//               of(VehiclesApiActions.searchFailure({ errorMsg: err.message }))
//             )
//           );
//         })
//       )
//   );
//
//   constructor(
//     private actions$: Actions,
//     private apiClient: VehiclesApiClient
//   ) {}
// }
