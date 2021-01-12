import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';

import { VehicleFeatureVehicleRouting } from './vehicle-feature-vehicle-routing.module';

import { VehiclesComponent } from './containers/vehicles/vehicles.component';
import { VehicleDetailsComponent } from './containers/vehicle-details/vehicle-details.component';
import { SharedUiGridModule } from '@zy/shared/ui-grid';
import { VehiclesGridComponent } from './components/vehicles-grid.component';
import { ThemePrimengModule } from '@zy/shared/util';
import { SharedUiComponentModule } from '@zy/shared/ui';
import { VehicleCreateComponent } from './containers/create/vehicle-create.component';
import { VehicleExistsGuard } from './guard/vehicle-exists.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedVehicleDataAccesFacadeModule,
    VehicleFeatureVehicleRouting,
    TranslateModule,
    SharedUiGridModule,
    SharedUiComponentModule,
    ThemePrimengModule
  ],
  declarations: [VehiclesComponent,
    VehicleDetailsComponent,
    VehiclesGridComponent,
    VehicleCreateComponent
  ],
  providers: [VehicleExistsGuard]
})
export class VehicleFeatureVehicleModule {}

