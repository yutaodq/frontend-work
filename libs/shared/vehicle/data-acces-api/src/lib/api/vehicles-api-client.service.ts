import { Injectable } from '@angular/core';

import { Adapter, GET, HttpService, Path, DELETE, POST, Body } from '@zy/shared/data-access-http';
import { VehiclesService } from './vehicles.service';
import { Observable } from 'rxjs';
import { Vehicle } from '@zy/model';

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

  // @POST('/vehicles')
  // public getCreateVehicle(@Body vehicle: Vehicle): Observable<any> {
  //   return null;
  // }

  // @POST('admin/study')
  // @Produces(MediaType.JSON)
  // public create(@Body study:Study):Observable<any> {
  //   return null;
  // }

  create(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`http://localhost:8080/api/vehicles`, vehicle);
  }

}
