export interface IConfig {
    functionName: string;
    logger: {
        logstashHost: string;
        logstashPort: number;
        logstashLevel: string;
    };
    apmLogging: boolean;
    apmSecretToken: string;
    ruleVersion: string;
    nodeEnv: string;
}
export declare const config: IConfig;
