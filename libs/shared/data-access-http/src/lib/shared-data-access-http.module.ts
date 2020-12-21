import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpServiceModule } from './http';
const EXPORTS_MODULES = [
  ]
@NgModule({
  imports: [
    CommonModule,
    HttpServiceModule.forRoot(),
  ],
  exports: [
    ...EXPORTS_MODULES
  ]
})
export class SharedDataAccessHttpModule {}
