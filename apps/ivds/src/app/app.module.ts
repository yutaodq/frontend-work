import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// @ts-ignore
import { SharedUiModule } from '@zy/shared/ui';
// @ts-ignore
// import { SharedUtilModule } from '@zy/shared/util';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    InputTextModule,
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
