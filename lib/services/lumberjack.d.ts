import { type LogLevel } from '../helpers/proto/lumberjack/LogLevel';
export declare class LumberjackService {
    #private;
    constructor(host: string, channel: string);
    log(message: string, level?: LogLevel, serviceOperation?: string, callback?: (...args: unknown[]) => unknown): void;
}
