import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleLogger, NullLogger } from './type';
import { LOGGERS } from './logger.interface';

@NgModule({
    imports: [CommonModule],
    providers: [
        { provide: LOGGERS, useClass: ConsoleLogger, multi: true },
        { provide: LOGGERS, useClass: NullLogger, multi: true }
    ]
})
export class LoggingModule {}
