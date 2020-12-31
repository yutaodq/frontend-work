import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Sandbox } from '@zy/shared/util';
import * as store from '@zy/store';
// import { CollectionPageActions } from '@zy/shared/vehicles/data-acces';
import * as fromVehicles from '@zy/shared/vehicle/data-acces';
import { Vehicle } from '@zy/model';

@Injectable()
export class VehicleFacade extends Sandbox {
  // public products$ = this.appState$.select(store.getProductsData);
  // public productsLoading$       = this.appState$.select(store.getProductsLoading);
  // public productDetails$        = this.appState$.select(store.getProductDetailsData);
  // public productDetailsLoading$ = this.appState$.select(store.getProductDetailsLoading);
  // public loggedUser$            = this.appState$.select(store.getLoggedUser);
  public vehicles$ = this.appState$.pipe(select(fromVehicles.selectVehicleCollection));
  // public vehicleDetails$        = this.appState$.select(fromVehicles.selectSelectedVehicle);
  public vehicleDetails$        = this.appState$.pipe(select(fromVehicles.selectSelectedVehicle)) as Observable<
    Vehicle
    >;
  // this.book$ = store.pipe(select(fromBooks.selectSelectedBook)) as Observable<
  //   Book
  //   >;

  private subscriptions: Array<Subscription> = [];

  constructor(protected appState$: Store<fromVehicles.State>) {
    super(appState$);
    this.registerEvents();
  }

  /**
   * Loads vehicles from the server
   */
  public loadVehicles(): void {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.load());
  }

  // /**
  //  * Loads product details from the server
  //  */
  // public loadProductDetails(id: number): void {
  //   this.appState$.dispatch(new productDetailsActions.LoadAction(id))
  // }
  //
  /**
   * Dispatches an action to select product details
   */
  public selectVehicle(id: string): void {
    this.appState$.dispatch(fromVehicles.ViewVehiclePageActions.selectVehicle({ id }))
    // this.appState$.dispatch(new productDetailsActions.LoadSuccessAction(product))
  }
  // BookActions.loadBook({ book: bookEntity })
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
