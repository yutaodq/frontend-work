import { InjectionToken } from '@angular/core';
import { ILoggerImpl } from './logger-impl.interface';

export interface ILogger {
    log(message: string, ...optionalParams: any[]): void;
    warn(message: string, ...optionalParams: any[]): void;
    info(message: string, ...optionalParams: any[]): void;
    error(message: string, ...optionalParams: any[]): void;
}

export const LOGGERS = new InjectionToken<ILoggerImpl[]>('logger.registry');
