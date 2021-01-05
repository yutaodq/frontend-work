import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

const EXPORTS_MODULES = [
];

@NgModule({
  imports: [CommonModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
  ],
  providers: [],
  declarations: [],
  exports: [...EXPORTS_MODULES]
})
export class SharedUtilLoggingModule {
}
