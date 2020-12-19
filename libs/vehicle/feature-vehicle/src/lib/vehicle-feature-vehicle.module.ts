import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './containers/vehicle/vehicle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: VehicleComponent }]),
  ],
  declarations: [VehicleComponent],
})
export class VehicleFeatureVehicleModule {}
