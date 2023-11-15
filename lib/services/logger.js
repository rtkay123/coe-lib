"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const tslib_1 = require("tslib");
const config_1 = require("../config");
const log4js_1 = tslib_1.__importDefault(require("log4js"));
if (config_1.config.nodeEnv !== 'dev' && config_1.config.nodeEnv !== 'test') {
    log4js_1.default.configure({
        appenders: {
            logstash: {
                type: '@log4js-node/logstash-http',
                url: `http://${config_1.config.logger.logstashHost}:${config_1.config.logger.logstashPort}/_bulk`,
                application: 'logstash-log4js',
                logType: 'application',
                logChannel: config_1.config.functionName,
            },
        },
        categories: {
            default: { appenders: ['logstash'], level: config_1.config.logger.logstashLevel },
        },
    });
}
const logger = config_1.config.nodeEnv === 'dev' || config_1.config.nodeEnv === 'test' ? console : log4js_1.default.getLogger();
class LoggerService {
    /*
     * Internal fields are called by the class when each respective method is called
     *
     * Each field is by default `null`, see `constructor()` for how each log level is set */
    #info = () => null;
    #debug = () => null;
    #trace = () => null;
    #warn = () => null;
    #error = () => null;
    constructor() {
        switch (config_1.config.logger.logstashLevel.toLowerCase()) {
            // error > warn > info > debug > trace
            case 'trace':
                this.#trace = this.#createLogCallback('trace');
                this.#debug = this.#createLogCallback('debug');
                this.#info = this.#createLogCallback('info');
                this.#warn = this.#createLogCallback('warn');
                this.#error = this.#createErrorFn();
                break;
            case 'debug':
                this.#debug = this.#createLogCallback('debug');
                this.#info = this.#createLogCallback('info');
                this.#warn = this.#createLogCallback('warn');
                this.#error = this.#createErrorFn();
                break;
            case 'info':
                this.#info = this.#createLogCallback('info');
                this.#warn = this.#createLogCallback('warn');
                this.#error = this.#createErrorFn();
                break;
            case 'warn':
                this.#warn = this.#createLogCallback('warn');
                this.#error = this.#createErrorFn();
                break;
            case 'error':
                this.#error = this.#createErrorFn();
                break;
            default:
                break;
        }
    }
    timeStamp() {
        const dateObj = new Date();
        let date = dateObj.toISOString();
        date = date.substring(0, date.indexOf('T'));
        const time = dateObj.toLocaleTimeString([], { hour12: false });
        return `${date} ${time}`;
    }
    #createErrorFn() {
        return (message, innerError, serviceOperation) => {
            let errMessage = typeof message === 'string' ? message : message.stack ?? message.message;
            if (innerError) {
                if (innerError instanceof Error) {
                    errMessage = `${errMessage}\r\n${innerError.stack ?? innerError.message}`;
                }
            }
            logger.error(`${this.messageStamp(serviceOperation)}[ERROR] - ${errMessage}`);
        };
    }
    #createLogCallback(level) {
        switch (level) {
            case 'trace':
                return (message, serviceOperation) => {
                    logger.trace(`${this.messageStamp(serviceOperation)}[TRACE] - ${message}`);
                };
            case 'debug':
                return (message, serviceOperation) => {
                    logger.debug(`${this.messageStamp(serviceOperation)}[DEBUG] - ${message}`);
                };
            case 'warn':
                return (message, serviceOperation) => {
                    logger.warn(`${this.messageStamp(serviceOperation)}[WARN] - ${message}`);
                };
            default:
                return (message, serviceOperation) => {
                    logger.info(`${this.messageStamp(serviceOperation)}[INFO] - ${message}`);
                };
        }
    }
    messageStamp(serviceOperation) {
        return `[${this.timeStamp()}][${config_1.config.functionName}${serviceOperation ? ' - ' + serviceOperation : ''}]`;
    }
    trace(message, serviceOperation) {
        this.#trace(message, serviceOperation);
    }
    log(message, serviceOperation) {
        this.#info(message, serviceOperation);
    }
    warn(message, serviceOperation) {
        this.#warn(message, serviceOperation);
    }
    error(message, innerError, serviceOperation) {
        this.#error(message, innerError, serviceOperation);
    }
    debug(message, serviceOperation) {
        this.#debug(message, serviceOperation);
    }
}
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.js.map