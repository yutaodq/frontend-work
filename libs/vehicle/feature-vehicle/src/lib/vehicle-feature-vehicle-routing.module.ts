import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './containers/vehicles/vehicles.component';
import { VehicleDetailsComponent } from './containers/vehicle-details/vehicle-details.component';
import { VehicleCreateComponent } from './containers/create/vehicle-create.component';
import { VehicleExistsGuard } from './guard/vehicle-exists.guard';

const vehiclesRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: VehiclesComponent,
  },
  {
    path: 'create',
    component: VehicleCreateComponent,
  },
  {
    path: ':id/detail',
    component: VehicleDetailsComponent,
    canActivate: [VehicleExistsGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(vehiclesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehicleFeatureVehicleRouting {
}
