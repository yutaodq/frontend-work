import { Injectable } from '@angular/core';

import { Adapter, GET, HttpService, Path, DELETE } from '@zy/shared/data-access-http';
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

  public getDelete(id: string): Observable<any> {
    console.log(`onSelectData(event):+ selectDataId+ selectDataId+ selectDataId` );

     const myurl = 'http://localhost:8080/vehicle/{id}';

    return  this.http.delete(myurl);
  }


  /**
   * Retrieves product vehicle-details-form by a given id
   *
   * @param id
   */
  @GET('/vehicles/{id}')
  // @Adapter(VehiclesService.vehicleDetailsAdapter)
  public getVehicleDetails(@Path('id') id: string): Observable<any> {
    return null;
  }
  @DELETE('/vehicles/{id}')
  // @Adapter(VehiclesService.vehicleDetailsAdapter)
  public getRemoveVehicle(@Path('id') id: string): Observable<any> {
    console.log(`onSelectData(event):+ selectDataId+ selectDataId+ selectDataId` );

    return null;
  }

}
