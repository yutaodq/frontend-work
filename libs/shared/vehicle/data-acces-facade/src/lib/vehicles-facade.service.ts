import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Sandbox } from '@zy/shared/util';
import * as fromVehicles from '@zy/shared/vehicle/data-acces';
import { Vehicle } from '@zy/model';

@Injectable()
export class VehiclesFacade extends Sandbox {
  public vehicles$ = this.appState$.pipe(select(fromVehicles.selectVehicleCollection));
  public vehicleDetails$ =
    this.appState$.pipe(select(fromVehicles.selectSelectedVehicle)) as Observable<Vehicle>;
  public vehiclesCollectionLoaded$ = this.appState$.pipe(select(fromVehicles.getCollectionLoading));

  private subscriptions: Array<Subscription> = [];

  constructor(protected appState$: Store<fromVehicles.State>) {
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
   * Loads product details from the server
   * loadVehicle
   */
  public loadVehicleDetails(id: string): void {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.loadEntity({id}))
  }

  /**
   * Dispatches an action to select product details
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
}
