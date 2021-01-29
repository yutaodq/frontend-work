import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedUiNoFoundPagaModule } from '@zy/shared/ui';

const routes: Routes = [
  {
    path: 'vehicles',
    loadChildren: () => import('@zy/vehicle/shell').then((m) => m.VehicleShellModule),
  },
  {
    path: 'vehicleUseTypes',
    loadChildren: () => import('@zy/vehicle/feature-use-type').then((m) => m.VehicleFeatureUseTypeModule),
  },
  {
    path: '404',
    loadChildren: () => import('@zy/shared/ui').then((m) => m.SharedUiNoFoundPagaModule),
  },
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// VehicleFeatureUseTypeModule
