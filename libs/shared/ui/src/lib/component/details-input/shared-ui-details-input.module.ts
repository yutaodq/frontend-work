import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsInputComponent } from './details-input.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

export const ZY_DETAILS_INPUT_EXPORTS: Array<any> = [
  DetailsInputComponent
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,

  ],
  declarations: [DetailsInputComponent],
  exports: [
    DetailsInputComponent
  ]
})
export class SharedUiDetailsInputModule {
}
