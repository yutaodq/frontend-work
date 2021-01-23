import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedDataAccessStoreModule } from '@zy/store';
import { HttpServiceModule } from '@zy/shared/data-access-http';

import { MainModule } from './main/main.module';
import { SharedUiGridModule } from '@zy/shared/ui-grid';
import { SharedUtilModule } from '@zy/shared/util';
import { MessageService } from 'primeng/api';

const EXPORTS_MODULES = [
  MainModule,
  SharedUiGridModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedUtilModule,
    SharedUiGridModule,
    SharedDataAccessStoreModule.forRoot(),
    HttpServiceModule.forRoot()
  ],
  exports: [
    ...EXPORTS_MODULES
  ],
  providers: [MessageService]
})
export class LayoutFeatureLayoutIvdsModule {
}
