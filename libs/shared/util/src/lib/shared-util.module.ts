import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from './_primeng/theme-primeng.module';

const EXPORTS_MODULES = [
  ThemePrimengModule
];

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: [],
  exports: [...EXPORTS_MODULES]
})
export class SharedUtilModule {
}
