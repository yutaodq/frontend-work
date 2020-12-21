import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesFaceade } from './vehicles.faceade';
import { SharedVehicleDataAccesModule } from '@zy/shared/vehicle/data-acces';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesModule
  ],
  providers: [VehiclesFaceade]
})
export class SharedVehicleDataAccesFacadeModule {}
