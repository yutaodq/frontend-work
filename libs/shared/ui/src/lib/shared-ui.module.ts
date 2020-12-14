import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './layout/foot/foot.component';
import { HeaderModule } from './layout/header/header.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { MenuModule } from './layout/menu/menu.module';
import { ConfigModule } from './layout/config/config.module';

const EXPORTS_MODULES = [
  HeaderModule,
  NavbarModule,
  MenuModule,
  ConfigModule
  ]
@NgModule({
  imports: [CommonModule],
  declarations: [FootComponent],
  exports: [
    ...EXPORTS_MODULES
  ]
})
export class SharedUiModule {}
