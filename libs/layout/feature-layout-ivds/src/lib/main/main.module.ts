import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvdsComponent } from './component/ivds.component';
import { SharedUiModule } from '@zy/shared/ui';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [IvdsComponent],
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule
  ],
  exports: [
    IvdsComponent
    ]

})
export class MainModule { }
