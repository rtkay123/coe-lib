"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv_1 = require("dotenv");
// Load .env file into process.env if it exists. This is convenient for running locally.
(0, dotenv_1.config)({
    path: path_1.default.resolve(__dirname, '../.env'),
});
exports.config = {
    functionName: process.env.FUNCTION_NAME,
    logger: {
        logstashHost: process.env.LOGSTASH_HOST,
        logstashPort: parseInt(process.env.LOGSTASH_PORT ?? '0', 10),
        logstashLevel: process.env.LOGSTASH_LEVEL || 'info',
        pinoElasticOpts: {
            flushBytes: 1000,
            elasticUsername: process.env.ELASTIC_USERNAME ?? '',
            elasticPassword: process.env.ELASTIC_PASSWORD ?? '',
            elasticHost: process.env.ELASTIC_HOST ?? 'http://localhost:9200',
            elasticIndex: process.env.ELASTIC_INDEX,
            elasticVersion: Number(process.env.ELASTIC_SEARCH_VERSION ?? '8.11'),
        },
    },
    apmLogging: process.env.APM_LOGGING === 'true',
    apmSecretToken: process.env.APM_SECRET_TOKEN,
    ruleVersion: process.env.RULE_VERSION,
    nodeEnv: process.env.NODE_ENV,
};
//# sourceMappingURL=config.js.map