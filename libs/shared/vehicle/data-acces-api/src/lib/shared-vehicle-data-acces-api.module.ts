import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesApiClient } from './api';

@NgModule({
  imports: [CommonModule],
  providers: [VehiclesApiClient]
})
export class SharedVehicleDataAccesApiModule {}
