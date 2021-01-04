import { ILogger } from './logger.interface';

export interface ILoggerImpl extends ILogger {
    readonly name: string;
}
