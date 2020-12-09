import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from './_icons/icon.module';
import { ThemePrimengModule } from './_primeng/theme-primeng.module';

const EXPORTS_MODULES = [
  IconModule,
  ThemePrimengModule
];

@NgModule({
  imports: [CommonModule, IconModule],
  providers: [],
  declarations: [],
  exports: [...EXPORTS_MODULES]
})
export class SharedUtilModule {
}
