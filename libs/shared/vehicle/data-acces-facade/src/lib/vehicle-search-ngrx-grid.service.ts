import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromVehicles from '@zy/shared/vehicle/data-acces';
import { SearchNgrxGridService } from '@zy/shared/util';

@Injectable()
export class VehicleSearchNgrxGridService extends  SearchNgrxGridService{
  // public query$ = this.appState$.pipe(select(fromVehicles.selectCollectionQuery));

  constructor(
    protected appState$: Store<fromVehicles.State>,
  ) {
    super();
    this.query$ = this.appState$.pipe(select(fromVehicles.selectCollectionQuery));
    this.registerEvents();
  }

  search(query: string) {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.searchCollection({query}));
  }


  clearSearch() {
    this.appState$.dispatch(fromVehicles.CollectionPageActions.searchCollectionClear());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
  }

}
