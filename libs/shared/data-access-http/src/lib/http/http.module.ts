import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { HttpService } from './http.service';
import { HttpResponseHandler } from './httpResponseHandler.service';

@NgModule({
  imports: [CommonModule]
})
export class HttpModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: HttpModule,

      providers: [
        HttpService,
        HttpResponseHandler
      ]
    };
  }
}
