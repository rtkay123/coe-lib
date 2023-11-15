import { type NetworkMap, type Pacs002 } from '..';
import { type TypologyResult } from './TypologyResult';
export declare class CADPRequest {
    typologyResult: TypologyResult;
    transaction: Pacs002;
    networkMap: NetworkMap;
    metaData?: {
        prcgTmDp: number;
        prcgTmCRSP: number;
    };
    constructor(typologyResult: TypologyResult, transaction: Pacs002, networkMap: NetworkMap, ruleResults: []);
}
export declare class CombinedResult {
    typologyResult: string;
    cadpRequests: CADPRequest[];
}
