import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './layout/foot/foot.component';
import { HeaderModule } from './layout/header/header.module';

const EXPORTS_MODULES = [
  HeaderModule
  ]
@NgModule({
  imports: [CommonModule],
  declarations: [FootComponent],
  exports: [
    ...EXPORTS_MODULES
  ]
})
export class SharedUiModule {}
