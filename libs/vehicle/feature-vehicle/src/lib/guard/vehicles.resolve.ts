/*
https://netmedia.io/dev/angular-architecture-patterns-high-level-project-architecture_5589
 */
import { Injectable }       from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
}                           from '@angular/router';
import { VehiclesFacade } from '@zy/shared/vehicle/data-acces-facade';

@Injectable()
export class VehiclesResolver implements Resolve<any> {

  private vehiclesSubscription;

  constructor(public vehiclesFacade: VehiclesFacade) {}

  /**
   * Triggered when application hits vehicle vehicle-details-form route.
   * It subscribes to vehicle list data and finds one with id from the route params.
   *
   * @param route
   */
  public resolve(route: ActivatedRouteSnapshot) {
    if (this.vehiclesSubscription) return;

    this.vehiclesSubscription = this.vehiclesFacade.vehicleDetails$.subscribe(vehicle => {
      if (!vehicle) {
        this.vehiclesFacade.loadVehicleDetails(route.params.id);
        return;
      }
      this.vehiclesFacade.selectVehicle(vehicle);
    });
  }
}
