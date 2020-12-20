import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
const EXPORTS_MODULES = [
  MainModule
  ]
@NgModule({
  imports: [
    CommonModule,

  ],
  exports: [
    ...EXPORTS_MODULES
  ]

})
export class LayoutFeatureLayoutIvdsModule {}
