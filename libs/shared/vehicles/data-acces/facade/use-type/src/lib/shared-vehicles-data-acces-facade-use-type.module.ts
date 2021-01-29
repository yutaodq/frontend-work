import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypesFacade } from './services/vehicle-use-types-facade.service';

@NgModule({
  imports: [CommonModule],
  providers: [VehicleUseTypesFacade]

})
export class SharedVehiclesDataAccesFacadeUseTypeModule {}
