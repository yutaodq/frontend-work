import { Injectable }             from "@angular/core";
import { Store }      	          from '@ngrx/store';
import { Subscription }           from "rxjs";

@Injectable()
export class VehiclesSandbox extends Sandbox {

  public products$              = this.appState$.select(store.getProductsData);
  public productsLoading$       = this.appState$.select(store.getProductsLoading);
  public productDetails$        = this.appState$.select(store.getProductDetailsData);
  public productDetailsLoading$ = this.appState$.select(store.getProductDetailsLoading);
  public loggedUser$            = this.appState$.select(store.getLoggedUser);

  private subscriptions: Array<Subscription> = [];

  constructor(
    protected appState$: Store<store.State>,
    private productsApiClient: ProductsApiClient
  ) {
    super(appState$);
    this.registerEvents();
  }

  /**
   * Loads products from the server
   */
  public loadProducts(): void {
    this.appState$.dispatch(new productsActions.LoadAction())
  }

  /**
   * Loads product details from the server
   */
  public loadProductDetails(id: number): void {
    this.appState$.dispatch(new productDetailsActions.LoadAction(id))
  }

  /**
   * Dispatches an action to select product details
   */
  public selectProduct(product: Product): void {
    this.appState$.dispatch(new productDetailsActions.LoadSuccessAction(product))
  }

  /**
   * Unsubscribes from events
   */
  public unregisterEvents() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Subscribes to events
   */
  private registerEvents(): void {
    // Subscribes to culture
    this.subscriptions.push(this.culture$.subscribe((culture: string) => this.culture = culture));

    this.subscriptions.push(this.loggedUser$.subscribe((user: User) => {
      if (user.isLoggedIn) this.loadProducts();
    }))
  }
}
