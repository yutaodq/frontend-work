import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedDataAccessStoreModule } from '@zy/store';
import { HttpServiceModule } from '@zy/shared/data-access-http';

const EXPORTS_MODULES = [
  MainModule
  ]

@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessStoreModule,
    HttpServiceModule.forRoot(),
  ],
  exports: [
    ...EXPORTS_MODULES
  ]

})
export class LayoutFeatureLayoutIvdsModule {}
