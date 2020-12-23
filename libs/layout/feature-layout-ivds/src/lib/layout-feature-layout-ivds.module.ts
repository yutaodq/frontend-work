import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedDataAccessStoreModule } from '@zy/store';
import { HttpServiceModule } from '@zy/shared/data-access-http';
import { HttpClientModule } from '@angular/common/http';

import { LayoutFeatureLayoutIvdsI18nModule } from './i18n/layout-feature-layout-ivds-i18n.module';
import { LayoutFeatureLayoutIvdsGridModule } from './grid/layout-feature-layout-ivds-grid.module';

const EXPORTS_MODULES = [
  MainModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutFeatureLayoutIvdsI18nModule,
    LayoutFeatureLayoutIvdsGridModule,
    SharedDataAccessStoreModule,
    HttpServiceModule.forRoot()
  ],
  exports: [
    ...EXPORTS_MODULES
  ],
})
export class LayoutFeatureLayoutIvdsModule {
}
