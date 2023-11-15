import { type LogMessage } from '../helpers/proto/message/LogMessage';
export declare class LumberjackService {
    #private;
    constructor(host: string);
    log(object: LogMessage, callback?: () => any): void;
}
