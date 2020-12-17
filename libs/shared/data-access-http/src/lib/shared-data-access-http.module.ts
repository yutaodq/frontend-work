import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from './http';
const EXPORTS_MODULES = [
  HttpModule
  ]
@NgModule({
  imports: [CommonModule],
  exports: [
    ...EXPORTS_MODULES
  ]
})
export class SharedDataAccessHttpModule {}
