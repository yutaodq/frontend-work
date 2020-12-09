import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from './icoms/icon.module';

const EXPORTS_MODULES = [IconModule];

@NgModule({
  imports: [CommonModule, IconModule],
  providers: [],
  declarations: [],
  exports: [...EXPORTS_MODULES]
})
export class SharedUtilModule {
}
