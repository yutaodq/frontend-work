import { ActionReducer, ActionReducerMap, combineReducers, compose, MetaReducer } from '@ngrx/store';

// tslint:disable-next-line:no-empty-interface
export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<AppState>[] = [];

export function store(state: any, action: any) {
  // tslint:disable-next-line:no-shadowed-variable
  const store: ActionReducer<AppState> = compose(combineReducers)(reducers);
  return store(state, action);
}
