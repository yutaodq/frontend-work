import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './layout/header/header.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { MenuModule } from './layout/menu/menu.module';
import { ConfigModule } from './layout/config/config.module';
import { FooterModule } from './layout/footer/footer.module';

const EXPORTS_MODULES = [
  HeaderModule,
  NavbarModule,
  MenuModule,
  ConfigModule,
  FooterModule
  ]
@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [
    ...EXPORTS_MODULES
  ]
})
export class SharedUiNoFoundPagaModule {}
