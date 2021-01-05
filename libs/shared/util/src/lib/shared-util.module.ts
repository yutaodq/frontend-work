import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from './_primeng/theme-primeng.module';
import { SharedUtilLoggingModule } from './logging';
import { SharedUtilI18nModule } from './i18n';

const EXPORTS_MODULES = [
  ThemePrimengModule,
];

@NgModule({
  imports: [CommonModule,
    SharedUtilLoggingModule,
    SharedUtilI18nModule
  ],
  providers: [],
  declarations: [],
  exports: [...EXPORTS_MODULES]
})
export class SharedUtilModule {
}
