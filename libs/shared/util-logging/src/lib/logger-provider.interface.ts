import { ILoggerImpl } from './logger-impl.interface';
import { LogLevel } from './log-level';

export interface ILoggerProvider {
    loggers: ILoggerImpl[];
    logLevel: LogLevel;
}
