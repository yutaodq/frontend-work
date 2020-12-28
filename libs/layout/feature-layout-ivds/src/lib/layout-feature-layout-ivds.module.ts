import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedDataAccessStoreModule } from '@zy/store';
import { HttpServiceModule } from '@zy/shared/data-access-http';
import { LayoutFeatureLayoutIvdsI18nModule } from './i18n/layout-feature-layout-ivds-i18n.module';

import { MainModule } from './main/main.module';
import { SharedUiGridModule } from '@zy/shared/ui-grid';

const EXPORTS_MODULES = [
  MainModule,
  SharedUiGridModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutFeatureLayoutIvdsI18nModule,
    SharedUiGridModule,
    SharedDataAccessStoreModule.forRoot(),
    HttpServiceModule.forRoot()
  ],
  exports: [
    ...EXPORTS_MODULES
  ],
})
export class LayoutFeatureLayoutIvdsModule {
}
