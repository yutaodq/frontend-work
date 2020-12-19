import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';

// @ts-ignore
import { LayoutFeatureLayoutIvdsModule } from '@zy/layout/feature-layout-ivds';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),

    AppRoutingModule,
    LayoutFeatureLayoutIvdsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {}
