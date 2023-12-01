import { type LoggerOptions } from 'pino';
import { type DestinationStream } from 'pino-elasticsearch';
interface ElasticLogger {
    stream: DestinationStream;
    ecsOpts: LoggerOptions;
}
export declare function createElasticStream(node: string, esVersion: number, username: string, password: string, flushBytes: number, index?: string): ElasticLogger;
type GenericFunction = (...args: unknown[]) => unknown;
export declare class LoggerService {
    #private;
    constructor(sidecarHost?: string);
    trace(message: string, serviceOperation?: string, callback?: GenericFunction): void;
    log(message: string, serviceOperation?: string, callback?: GenericFunction): void;
    warn(message: string, serviceOperation?: string, callback?: GenericFunction): void;
    error(message: string | Error, innerError?: unknown, serviceOperation?: string, callback?: GenericFunction): void;
    debug(message: string, serviceOperation?: string, callback?: GenericFunction): void;
}
export {};
