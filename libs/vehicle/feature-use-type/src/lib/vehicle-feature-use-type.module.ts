import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-feature-use-type-routing.module';
import { VehiclesUseTypeComponent } from './containers/list/vehicles-use-type.component';

@NgModule({
  imports: [
    CommonModule,
    VehicleFeatureVehicleUseTypeRouting
  ],
  declarations: [
    VehiclesUseTypeComponent,
    ]

})
export class VehicleFeatureUseTypeModule {}
