import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './containers/vehicles/vehicles.component';
import { VehicleDetailsComponent } from './containers/vehicle-details/vehicle-details.component';

const vehiclesRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: VehiclesComponent,
  },
  {
    path: 'vehicles/:id',
    component: VehicleDetailsComponent
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
