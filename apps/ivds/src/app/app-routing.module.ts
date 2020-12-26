import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'vehicles',
    loadChildren: () => import('@zy/vehicle/shell').then((m) => m.VehicleShellModule),
  },
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
