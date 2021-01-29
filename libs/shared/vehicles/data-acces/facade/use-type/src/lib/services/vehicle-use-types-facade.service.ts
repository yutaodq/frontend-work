import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Sandbox } from '@zy/shared/util';
import * as fromVehicleUseTypes from '@zy/shared/vehicles/data-acces/store/use-type';
import { VehicleUseType } from '@zy/model';
import { filter, map, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as RouterAction from '@zy/shared/utils/ngrx-router';

@Injectable()
export class VehicleUseTypesFacade extends Sandbox {
  public vehicleUseTypes$ = this.appState$.pipe(select(fromVehicleUseTypes.selectAllVehicleUseTypes));
  public vehicleUseTypesLoading$       = this.appState$.pipe(select(fromVehicleUseTypes.selectVehicleUseTypesLoading ));


  // public query$ = this.appState$.pipe(select(fromVehicleUseTypes.selectVehicleUseTypesQuery));

  public vehicleUseTypesLoaded$ = this.appState$.pipe(select(fromVehicleUseTypes.selectVehicleUseTypesLoaded));

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<fromVehicleUseTypes.State>,
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
    this.appState$.dispatch(fromVehicleUseTypes.VehicleUseTypeActions.loadVehicleUseTypes());
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
