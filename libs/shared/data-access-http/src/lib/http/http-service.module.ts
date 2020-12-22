import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';

import { HttpService } from './http.service';
import { HttpResponseHandler } from './httpResponseHandler.service';

import {
  SimpleNotificationsModule,
  NotificationsService
} from 'angular2-notifications';



@NgModule({
  imports: [
    CommonModule,

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
