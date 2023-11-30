import { type LoggerOptions } from 'pino';
import { type DestinationStream } from 'pino-elasticsearch';
interface ElasticLogger {
    stream: DestinationStream;
    ecsOpts: LoggerOptions;
}
export declare function createElasticStream(node: string, esVersion: number, username: string, password: string, flushBytes: number, index?: string): ElasticLogger;
export declare class LoggerService {
    #private;
    constructor(sidecarHost?: string);
    timeStamp(): string;
    messageStamp(serviceOperation?: string): string;
    trace(message: string, serviceOperation?: string): void;
    log(message: string, serviceOperation?: string): void;
    warn(message: string, serviceOperation?: string): void;
    error(message: string | Error, innerError?: unknown, serviceOperation?: string): void;
    debug(message: string, serviceOperation?: string): void;
}
export {};
