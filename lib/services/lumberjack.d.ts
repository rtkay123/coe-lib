import type { LogLevel } from '../helpers/proto/message/LogLevel';
export declare class LumberjackService {
    #private;
    constructor(host: string, channel: string);
    log(message: string, level?: LogLevel, callback?: () => any): void;
}
