import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesFacade } from './vehicles-facade.service';
import { SharedVehicleDataAccesModule } from '@zy/shared/vehicle/data-acces';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesModule
  ],
  providers: [VehiclesFacade]
})
export class SharedVehicleDataAccesFacadeModule {}
