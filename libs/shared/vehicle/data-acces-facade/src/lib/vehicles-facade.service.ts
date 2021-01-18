import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Sandbox } from '@zy/shared/util';
import * as fromVehicles from '@zy/shared/vehicle/data-acces';
import { Vehicle } from '@zy/model';
import { filter, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class VehiclesFacade extends Sandbox {
  public vehicles$ = this.appState$.pipe(select(fromVehicles.selectVehicleCollection));
  public vehicleDetails$ =
    this.appState$.pipe(select(fromVehicles.selectSelectedVehicle)) as Observable<Vehicle>;
  public vehiclesCollectionLoaded$ = this.appState$.pipe(select(fromVehicles.selectCollectionLoaded));

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<fromVehicles.State>,
    private _router: Router,
  ) {
    super(appState$);
    this.loadVehicles();
    this.registerEvents();
  }

  /**
   * Loads vehicles from the server
   */
  public loadVehicles(): void {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.loadCollection());
  }

  /**
   * Loads product vehicle-details-form from the server
   * loadVehicle
   */
  public loadVehicleDetails(id: string): void {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.selectEntity({ id }));
  }

  /**
   * Dispatches an action to select product vehicle-details-form
   */
  public selectVehicle(vehicle: Vehicle): void {
    // this.appState$.dispatch(fromVehicles.ViewVehiclePageActions.selectVehicle({ vehicle }))
    // this.appState$.dispatch(new productDetailsActions.LoadSuccessAction(product))
  }

  public unregisterEvents() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
  }

  returnToList() {
    this._router.navigate(['vehicles', 'list']);
  }


  public waitForCollectionToLoad(): Observable<boolean> {
    return this.appState$.pipe(select(fromVehicles.selectCollectionLoaded),
      filter((loaded) => loaded),
      take(1)
    );
  }
  hasVehicleInStore(id: string): Observable<boolean> {
    return this.appState$.pipe(
      select(fromVehicles.selectVehicleEntities),
      map((entities) => !!entities[id]),
      take(1)
    );
  }

}
