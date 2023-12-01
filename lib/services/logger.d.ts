import { LumberjackGRPCService } from './lumberjackGRPCService';
export type LogCallback = (...args: unknown[]) => unknown;
type LogFunc = (message: string, serviceOperation?: string, callback?: LogCallback) => void;
export declare class LoggerService {
    info: LogFunc;
    debug: LogFunc;
    trace: LogFunc;
    warn: LogFunc;
    error: (message: string | Error, innerError?: unknown, serviceOperation?: string, callback?: LogCallback) => void;
    lumberjackService: LumberjackGRPCService | undefined;
    constructor(sidecarHost?: string);
    fatal(message: string | Error, innerError?: unknown, serviceOperation?: string, callback?: LogCallback): void;
}
export {};
