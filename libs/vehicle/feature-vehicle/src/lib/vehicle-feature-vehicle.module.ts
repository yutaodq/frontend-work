import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './containers/vehicle/vehicle.component';
import { RouterModule } from '@angular/router';
import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutFeatureLayoutIvdsGridModule } from '../../../../layout/feature-layout-ivds/src/lib/grid/layout-feature-layout-ivds-grid.module';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesFacadeModule,
    RouterModule.forChild([{ path: '', component: VehicleComponent }]),
    TranslateModule,
    LayoutFeatureLayoutIvdsGridModule
  ],
  declarations: [VehicleComponent],
})
export class VehicleFeatureVehicleModule {}
