import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedUiModule } from '@zy/shared/ui';

import { IvdsComponent } from './component/ivds.component';

@NgModule({
  declarations: [IvdsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedUiModule,
  ],
  exports: [
    IvdsComponent
    ]

})
export class MainModule { }
