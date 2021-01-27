import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Sandbox } from '@zy/shared/util';
import * as fromVehicles from '@zy/shared/vehicle/data-acces';
import { Vehicle } from '@zy/model';
import { filter, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as RouterAction from '@zy/shared/utils/ngrx-router';

@Injectable()
export class VehiclesFacade extends Sandbox {
  public vehicles$ = this.appState$.pipe(select(fromVehicles.selectVehicleCollection));
  public vehiclesLoading$       = this.appState$.pipe(select(fromVehicles.selectCollectionLoading ));

  public vehicleDetails$ =
    this.appState$.pipe(select(fromVehicles.selectSelectedVehicle)) as Observable<Vehicle>;

  public vehicleDetailsRemoveSuccess$ =
    this.appState$.pipe(select(fromVehicles.selectVehicleRemoveSuccess)) as Observable<boolean>;

  public query$ = this.appState$.pipe(select(fromVehicles.selectCollectionQuery));

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
/*
   * Loads vehicle vehicle-create from the server
   * loadVehicle
 */
  public addVehicle(vehicle: Vehicle): void {
    console.log(`onSelectData(event):+ getCreateVehicle+ getCreateVehicle+ selectDataId`+ vehicle.name );

    this.appState$.dispatch(fromVehicles.VehiclePageActions.createVehicle({vehicle}));
  }

  /**
   * Loads vehicle vehicle-details-form from the server
   * loadVehicle
   */
  public loadVehicleDetails(id: string): void {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.selectVehicle({ id }));
  }

  /**
   * Dispatches an action to select product vehicle-details-form
   */
  public selectVehicle(vehicle: Vehicle): void {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.selectVehicle( vehicle ))
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

  public returnToList() {
    console.log(`onSelectData(event):+ getCreateVehicle+ getCreateVehicle+ selectDataId` );
    this.appState$.dispatch(RouterAction.go({ to: { path: ['vehicles', 'list'] } }))
    // this._router.navigate(['vehicles', 'list']);
  }
  public removeVehicle(vehicle: Vehicle) {
    this.appState$.dispatch(fromVehicles.VehiclePageActions.removeVehicle( {vehicle} ))
  }


  // public waitForCollectionToLoad(): Observable<boolean> {
  //   return this.appState$.pipe(select(fromVehicles.selectCollectionLoaded),
  //     filter((loaded) => loaded),
  //     take(1)
  //   );
  // }
  // hasVehicleInStore(id: string): Observable<boolean> {
  //   return this.appState$.pipe(
  //     select(fromVehicles.selectVehicleEntities),
  //     map((entities) => !!entities[id]),
  //     take(1)
  //   );
  // }

}
