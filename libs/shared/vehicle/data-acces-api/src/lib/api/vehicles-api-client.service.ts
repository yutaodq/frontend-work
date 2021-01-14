import { Injectable } from '@angular/core';

import { Adapter, GET, HttpService, Path } from '@zy/shared/data-access-http';
import { VehiclesService } from './vehicles.service';
import { Observable } from 'rxjs';

@Injectable()
export class VehiclesApiClient extends HttpService {
  /**
   * Retrieves all products
   */
  @GET('/vehicles')
  // @Adapter(VehiclesService.gridAdapter)
  public getCollection(): Observable<any> {

    return null;
  }

  // public getCollection(): Observable<any> {
  //
  //    const myurl = 'http://localhost:8080/vehicle';
  //
  //   return  this.http.get(myurl);
  // }


  /**
   * Retrieves product vehicle-details-form by a given id
   *
   * @param id
   */
  @GET('/vehicles/{id}')
  // @Adapter(VehiclesService.vehicleDetailsAdapter)
  public getVehicleDetails(@Path('id') id: number): Observable<any> {
    return null;
  }
}
