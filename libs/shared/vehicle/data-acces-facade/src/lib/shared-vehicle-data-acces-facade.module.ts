import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFacade } from './vehicle-facade.service';
import { SharedVehicleDataAccesModule } from '@zy/shared/vehicle/data-acces';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesModule
  ],
  providers: [VehicleFacade]
})
export class SharedVehicleDataAccesFacadeModule {}
