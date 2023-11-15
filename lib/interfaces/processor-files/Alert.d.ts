import { TADPResult } from './TADPResult';
import { MetaData } from '../metaData';
export declare class Alert {
    evaluationID: string;
    metaData?: MetaData | undefined;
    status: string;
    timestamp: Date;
    tadpResult: TADPResult;
}
