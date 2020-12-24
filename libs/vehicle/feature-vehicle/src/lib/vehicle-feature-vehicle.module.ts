import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './containers/vehicle/vehicle.component';
import { RouterModule } from '@angular/router';
import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutFeatureLayoutIvdsGridModule } from '@zy/layout/feature-layout-ivds';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesFacadeModule,
    RouterModule.forChild([{ path: '', component: VehicleComponent }]),
    TranslateModule,
    LayoutFeatureLayoutIvdsGridModule,
    InputTextModule
  ],
  declarations: [VehicleComponent],
})
export class VehicleFeatureVehicleModule {}
