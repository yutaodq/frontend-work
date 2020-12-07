import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FootComponent } from './layout/foot/foot.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FootComponent],
  exports: [
    HeaderComponent
  ]
})
export class SharedUiModule {}
