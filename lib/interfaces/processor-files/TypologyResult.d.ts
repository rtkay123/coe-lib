import { type RuleResult } from '..';
export declare class TypologyResult {
    id: string;
    cfg: string;
    prcgTm?: number | undefined;
    result: number;
    review?: boolean | undefined;
    ruleResults: RuleResult[];
    workflow: WorkFlow;
}
export declare class WorkFlow {
    alertThreshold: number;
    interdictionThreshold?: number | undefined;
}
