import { type LogLevel } from '../helpers/proto/lumberjack/LogLevel';
export declare class LumberjackGRPCService {
    #private;
    constructor(host: string, channel: string);
    log(message: string, level?: LogLevel, serviceOperation?: string, id?: string, callback?: (...args: unknown[]) => unknown): void;
}
