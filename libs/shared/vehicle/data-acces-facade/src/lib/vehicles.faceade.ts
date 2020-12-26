import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Sandbox } from '@zy/shared/util';
import * as store from '@zy/store';
// import { CollectionPageActions } from '@zy/shared/vehicles/data-acces';
import * as fromVehicles from '@zy/shared/vehicle/data-acces';

@Injectable()
export class VehiclesFaceade extends Sandbox {
  // public products$ = this.appState$.select(store.getProductsData);
  // public productsLoading$       = this.appState$.select(store.getProductsLoading);
  // public productDetails$        = this.appState$.select(store.getProductDetailsData);
  // public productDetailsLoading$ = this.appState$.select(store.getProductDetailsLoading);
  // public loggedUser$            = this.appState$.select(store.getLoggedUser);
  public vehicles$ = this.appState$.pipe(select(fromVehicles.selectVehicleCollection));
  // public vehicleDetails$        = this.appState$.select(store.getVehicleDetailsData);

  private subscriptions: Array<Subscription> = [];

  constructor(protected appState$: Store<store.AppState>) {
    super(appState$);
    this.registerEvents();
  }

  /**
   * Loads products from the server
   */
  public loadVehicles(): void {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.enter());
  }

  // /**
  //  * Loads product details from the server
  //  */
  // public loadProductDetails(id: number): void {
  //   this.appState$.dispatch(new productDetailsActions.LoadAction(id))
  // }
  //
  // /**
  //  * Dispatches an action to select product details
  //  */
  // public selectProduct(product: Product): void {
  //   this.appState$.dispatch(new productDetailsActions.LoadSuccessAction(product))
  // }
  //
  // /**
  //  * Unsubscribes from events
  //  */
  public unregisterEvents() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
    // Subscribes to culture
    // this.subscriptions.push(this.culture$.subscribe((culture: string) => this.culture = culture));
    //
    // this.subscriptions.push(this.loggedUser$.subscribe((user: User) => {
    //   if (user.isLoggedIn) this.loadProducts();
    // }))
    this.loadVehicles();
  }
}
