export interface IConfig {
    functionName: string;
    logger: {
        logstashHost: string;
        logstashPort: number;
        logstashLevel: string;
        pinoElasticOpts: {
            elasticUsername: string;
            elasticPassword: string;
            elasticHost: string;
            elasticIndex?: string;
            elasticVersion: number;
            flushBytes: number;
        };
    };
    apmLogging: boolean;
    apmSecretToken: string;
    ruleVersion: string;
    nodeEnv: string;
}
export declare const config: IConfig;
