import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';

import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';

/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable({
  providedIn: 'root',
})
export class VehicleExistsGuard implements CanActivate {
  private _vehiclesFacade : VehiclesFacade;
  constructor(
    public vehiclesFacade: VehiclesFacade,
    private router: Router
  ) {
    this._vehiclesFacade = vehiclesFacade;
  }

  /**
   * This method creates an observable that waits for the `loaded` property
   * of the collection state to turn `true`, emitting one time once loading
   * has finished.
   */
  waitForCollectionToLoad(): Observable<boolean> {
//   //  this._vehiclesFacade.vehiclesCollectionLoaded$.pipe(
//   //    map(loaded =>   console.log(`waitForCollectionToLoadwaitForCollectionToLoad` + loaded))
//   //
//   // )
// return of(false);

return this._vehiclesFacade.vehiclesCollectionLoaded$.pipe(
      filter((loaded) => loaded),
      take(1)
    )

    return this._vehiclesFacade.vehiclesCollectionLoaded$.subscribe(
      filter((loaded) => loaded),
      take(1)
    )

    // return this.store.pipe(
    //   select(fromVehicles.selectCollectionLoaded),
    //   filter((loaded) => loaded),
    //   take(1)
    // );
  }

  // /**
  //  * This method checks if a vehicle with the given ID is already registered
  //  * in the Store
  //  */
  // hasVehicleInStore(id: string): Observable<boolean> {
  //   return this.store.pipe(
  //     select(fromVehicles.selectVehicleEntities),
  //     map((entities) => !!entities[id]),
  //     take(1)
  //   );
  // }
  //
  // /**
  //  * This method loads a vehicle with the given ID from the API and caches
  //  * it in the store, returning `true` or `false` if it was found.
  //  */
  // hasVehicleInApi(id: string): Observable<boolean> {
  //   return this.googleVehicles.retrieveVehicle(id).pipe(
  //     map((vehicleEntity) => VehicleActions.loadVehicle({ vehicle: vehicleEntity })),
  //     tap((action) => this.store.dispatch(action)),
  //     map((vehicle) => !!vehicle),
  //     catchError(() => {
  //       this.router.navigate(['/404']);
  //       return of(false);
  //     })
  //   );
  // }
  //
  // /**
  //  * `hasVehicle` composes `hasVehicleInStore` and `hasVehicleInApi`. It first checks
  //  * if the vehicle is in store, and if not it then checks if it is in the
  //  * API.
  //  */
  hasVehicle(id: string): Observable<boolean> {
    console.log(`onSelectData(event):hhhhhhhhhhhhh` + id);
    return of(true);
    // return this.hasVehicleInStore(id).pipe(
    //   switchMap((inStore) => {
    //     if (inStore) {
    //       return of(inStore);
    //     }
    //
    //     return this.hasVehicleInApi(id);
    //   })
    // );
  }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the collection to load, then it checks if we need
   * to request a vehicle from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const ID = route.params['id']

    const abc = this.waitForCollectionToLoad().subscribe(
      loade => console.log(`onSelectData(event):canActivatecanActivate` + abc)

  );
    // console.log(`onSelectData(event):canActivatecanActivate` + abc);

    // return this.waitForCollectionToLoad().pipe(
    //   switchMap(() => this.hasVehicle(route.params['id']))
    // );

    return of(false);
  }
}
