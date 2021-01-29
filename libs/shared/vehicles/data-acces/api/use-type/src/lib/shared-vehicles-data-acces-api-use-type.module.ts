import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypesApiClient } from './vehicle-use-types-api-client.service';

@NgModule({
  imports: [CommonModule],
  providers: [VehicleUseTypesApiClient]
})
export class SharedVehiclesDataAccesApiUseTypeModule {}
