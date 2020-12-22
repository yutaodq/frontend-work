import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { TranslateService }     from "@ngx-translate/core";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { LayoutFeatureLayoutIvdsModule } from '@zy/layout/feature-layout-ivds';
import { SharedDataAccessStoreModule } from '@zy/store';
import { SharedDataAccessHttpModule } from '@zy/shared/data-access-http';
console.log(`在控制台打印:`);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedDataAccessStoreModule,
    SharedDataAccessHttpModule,
    LayoutFeatureLayoutIvdsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {}
