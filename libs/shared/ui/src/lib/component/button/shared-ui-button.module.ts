import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule, Button as PrimeNgButton } from 'primeng/button';
import { ZyButtonNewComponent } from './zy-button-new-component';

export const ZY_BUTTON_EXPORTS: Array<any> = [
  ZyButtonNewComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ButtonModule],
  declarations: [ZyButtonNewComponent],
  exports: [...ZY_BUTTON_EXPORTS]
})
export class SharedUiButtonModule {}
