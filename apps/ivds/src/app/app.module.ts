import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// @ts-ignore
import { SharedUiModule } from '@zy/shared/ui';
import {InputTextModule} from 'primeng/inputtext';
// @ts-ignore
import { SharedUtilModule } from '@zy/shared/util';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InputTextModule,
    SharedUtilModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedUiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
