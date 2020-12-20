import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedDataAccessStoreModule } from '@zy/store';
const EXPORTS_MODULES = [
  MainModule
  ]
@NgModule({
  imports: [
    CommonModule,
    SharedDataAccessStoreModule
  ],
  exports: [
    ...EXPORTS_MODULES
  ]

})
export class LayoutFeatureLayoutIvdsModule {}
