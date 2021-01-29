import { Injectable } from '@angular/core';

import { Adapter, GET, HttpService, Path, DELETE, POST, Body } from '@zy/shared/data-access-http';
import { Observable } from 'rxjs';
import { VehicleUseType } from '@zy/model';

@Injectable()
export class VehicleUseTypesApiClient extends HttpService {
  // @GET('/vehicleUseTypes')
  @GET('/vehicle_use_types')
  public getCollection(): Observable<any> {

    return null;
  }
}
