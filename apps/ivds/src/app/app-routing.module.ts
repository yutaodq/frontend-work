import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'general',
    loadChildren: () => import('@frontend-work/vehicle/shell').then((m) => m.VehicleShellModule),
  },
  { path: '', redirectTo: 'general', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
