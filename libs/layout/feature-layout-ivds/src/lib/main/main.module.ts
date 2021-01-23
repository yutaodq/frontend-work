import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUiModule } from '@zy/shared/ui';

import { IvdsComponent } from './component/ivds.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [IvdsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedUiModule,
    ToastModule
  ],
  exports: [ IvdsComponent ],
  providers: []

})
export class MainModule { }
