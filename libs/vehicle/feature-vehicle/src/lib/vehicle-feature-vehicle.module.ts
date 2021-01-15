import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule}  from '@angular/forms';

import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';

import { VehicleFeatureVehicleRouting } from './vehicle-feature-vehicle-routing.module';

import { VehiclesComponent } from './containers/vehicles/vehicles.component';
import { VehicleDetailsComponent } from './containers/vehicle-details/vehicle-details.component';
import { SharedUiGridModule } from '@zy/shared/ui-grid';
import { ThemePrimengModule } from '@zy/shared/util';
import { SharedUiComponentModule} from '@zy/shared/ui';
import { VehicleCreateComponent } from './containers/create/vehicle-create.component';
import { VehiclesResolver } from './guard/vehicles.resolve';
import { VehicleFeatureVehicleComponentsModule } from './components/vehicle-feature-vehicle-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedVehicleDataAccesFacadeModule,
    VehicleFeatureVehicleRouting,
    TranslateModule,
    SharedUiGridModule,
    SharedUiComponentModule,
    ThemePrimengModule,
    VehicleFeatureVehicleComponentsModule,
  ],
  declarations: [VehiclesComponent,
    VehicleDetailsComponent,
    // VehicleDetailsFormComponent,
    // VehicleDetailsToolbarComponent,
    // VehiclesGridComponent,
    VehicleCreateComponent
  ],
  providers: [ VehiclesResolver]
})
export class VehicleFeatureVehicleModule {}

