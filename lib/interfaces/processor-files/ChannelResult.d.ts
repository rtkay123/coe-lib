import { type TypologyResult } from './TypologyResult';
export declare class ChannelResult {
    id: string;
    cfg: string;
    prcgTm?: number | undefined;
    status?: string | undefined;
    result: number;
    typologyResult: TypologyResult[];
}
