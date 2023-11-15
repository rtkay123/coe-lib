export declare class LoggerService {
    #private;
    constructor();
    timeStamp(): string;
    messageStamp(serviceOperation?: string): string;
    trace(message: string, serviceOperation?: string): void;
    log(message: string, serviceOperation?: string): void;
    warn(message: string, serviceOperation?: string): void;
    error(message: string | Error, innerError?: unknown, serviceOperation?: string): void;
    debug(message: string, serviceOperation?: string): void;
}
