import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedDataAccessStoreModule } from '@zy/store';
import { HttpServiceModule } from '@zy/shared/data-access-http';
import { LayoutFeatureLayoutIvdsI18nModule } from './i18n/layout-feature-layout-ivds-i18n.module';
import { LayoutFeatureLayoutIvdsGridModule } from './grid/layout-feature-layout-ivds-grid.module';

import { MainModule } from './main/main.module';

const EXPORTS_MODULES = [
  MainModule,
  LayoutFeatureLayoutIvdsGridModule,

];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutFeatureLayoutIvdsI18nModule,
    LayoutFeatureLayoutIvdsGridModule,
    SharedDataAccessStoreModule.forRoot(),
    HttpServiceModule.forRoot()
  ],
  exports: [
    ...EXPORTS_MODULES
  ],
})
export class LayoutFeatureLayoutIvdsModule {
}
