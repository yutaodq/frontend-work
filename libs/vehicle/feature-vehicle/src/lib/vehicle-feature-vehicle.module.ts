import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './containers/vehicle/vehicle.component';
import { RouterModule } from '@angular/router';
import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesFacadeModule,
    RouterModule.forChild([{ path: '', component: VehicleComponent }]),
  ],
  declarations: [VehicleComponent],
})
export class VehicleFeatureVehicleModule {}
