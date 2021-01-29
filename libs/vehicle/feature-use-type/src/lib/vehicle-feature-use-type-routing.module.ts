import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesUseTypeComponent } from './containers/list/vehicles-use-type.component';

const vehiclesRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: VehiclesUseTypeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(vehiclesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehicleFeatureVehicleUseTypeRouting {
}
