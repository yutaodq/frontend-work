import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { LayoutFeatureLayoutIvdsModule } from '@zy/layout/feature-layout-ivds';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutFeatureLayoutIvdsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {}
