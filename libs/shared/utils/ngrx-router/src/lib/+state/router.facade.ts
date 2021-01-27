import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as RouterActions from './router.actions';
import { NgrxRoute } from './router.interfaces';

@Injectable({
    providedIn: 'root'
})
export class RouterFacade {

  constructor(private store: Store) {
    }

    goTo(props: NgrxRoute) {
        this.store.dispatch(RouterActions.go({to: props}));
    }
}
