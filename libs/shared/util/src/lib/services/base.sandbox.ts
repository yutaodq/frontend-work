import { Store } from '@ngrx/store';
import * as store from '@zy/store';
import { localeDateString } from '../utility';

export abstract class Sandbox {
  // public loggedUser$: Observable<any> = this.appState$.select(store.getLoggedUser);
  // public culture$:    Observable<any> = this.appState$.select(store.getSelectedCulture);
  public culture: string;

  constructor(protected appState$: Store<store.AppState>) {}

  /**
   * Pulls user from local storage and saves it to the store
   */
  public loadUser(): void {
    // let user = JSON.parse(localStorage.getItem('currentUser'));
    // this.appState$.dispatch(new authActions.AddUserAction(new User(user)));
  }

  /**
   * Formats date string based on selected culture
   *
   * @param value
   */
  public formatDate(value: string) {
    return localeDateString(value, this.culture);
  }
}
