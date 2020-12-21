import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { LayoutFeatureLayoutIvdsModule } from '@zy/layout/feature-layout-ivds';
import { SharedDataAccessStoreModule } from '@zy/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedDataAccessStoreModule,

    LayoutFeatureLayoutIvdsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {}
