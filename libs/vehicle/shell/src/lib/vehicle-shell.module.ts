import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@zy/vehicle/feature-vehicle')
      .then((m) => m.VehicleFeatureVehicleModule),
  },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('@zy/vehicle/feature-vehicle')
  //     .then((m) => m.VehicleFeatureUseTypeComponentsModule),
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'welcome',
  // },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VehicleShellModule {}
