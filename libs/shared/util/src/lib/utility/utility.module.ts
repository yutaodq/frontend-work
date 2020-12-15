import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { UtilService } from './utility.service';
import { ValidationService } from './validation.service';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: UtilityModule,
      providers: [
        UtilService,
        ValidationService
      ]
    };
  }
}
