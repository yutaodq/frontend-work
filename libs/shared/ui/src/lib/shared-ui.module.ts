import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './layout/foot/foot.component';
import { HeaderModule } from './layout/header/header.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { MenuModule } from './layout/menu/menu.module';

const EXPORTS_MODULES = [
  HeaderModule,
  NavbarModule,
  MenuModule
  ]
@NgModule({
  imports: [CommonModule],
  declarations: [FootComponent],
  exports: [
    ...EXPORTS_MODULES
  ]
})
export class SharedUiModule {}
