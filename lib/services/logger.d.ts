import { LumberjackGRPCService } from './lumberjackGRPCService';
import { type LogCallback } from '../helpers/logUtilities';
type LogFunc = (message: string, serviceOperation?: string, id?: string, callback?: LogCallback) => void;
export declare class LoggerService {
    log: LogFunc;
    debug: LogFunc;
    trace: LogFunc;
    warn: LogFunc;
    error: (message: string | Error, innerError?: unknown, serviceOperation?: string, id?: string, callback?: LogCallback) => void;
    lumberjackService: LumberjackGRPCService | undefined;
    constructor(sidecarHost?: string);
    fatal(message: string | Error, innerError?: unknown, serviceOperation?: string, id?: string, callback?: LogCallback): void;
}
export {};
