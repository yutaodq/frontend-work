import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import {
  HttpClientModule,
  HttpClient
} from "@angular/common/http";


import { HttpService } from './http.service';
import { HttpResponseHandler } from './httpResponseHandler.service';

import {
  SimpleNotificationsModule,
  NotificationsService
} from 'angular2-notifications';

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    SimpleNotificationsModule.forRoot()
  ]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: HttpServiceModule,
      providers: [
        HttpService,
        HttpResponseHandler
      ]
    };
  }
}
