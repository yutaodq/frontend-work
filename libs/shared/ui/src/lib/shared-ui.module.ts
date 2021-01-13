import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './layout/header/header.module';
import { NavbarModule } from './layout/navbar/navbar.module';
import { MenuModule } from './layout/menu/menu.module';
import { ConfigModule } from './layout/config/config.module';
import { FooterModule } from './layout/footer/footer.module';
// import { DETAILS_INPUT_EXPORTS, SharedUiDetailsInputModule } from './component/details-input/shared-ui-details-input.module';
//
// export const UI_COMPONENTS_EXPORTS: Array<any> = [
//   ...DETAILS_INPUT_EXPORTS
//   ]

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
export class SharedUiModule {}
