"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatabaseManager = exports.readyChecks = void 0;
const redisBuilder_1 = require("../builders/redisBuilder");
const pseudonymsBuilder_1 = require("../builders/pseudonymsBuilder");
const transactionHistoryBuilder_1 = require("../builders/transactionHistoryBuilder");
const configurationBuilder_1 = require("../builders/configurationBuilder");
const networkMapBuilder_1 = require("../builders/networkMapBuilder");
const transactionBuilder_1 = require("../builders/transactionBuilder");
exports.readyChecks = {};
/**
 * Creates a DatabaseManagerInstance which consists of all optionally configured databases and a redis cache
 *
 * Returns functionality for configured options
 *
 * @param {T} config ManagerStatus | RedisService | PseudonymsDB | TransactionHistoryDB | ConfigurationDB
 * @return {*}  {Promise<DatabaseManagerInstance<T>>}
 */
async function CreateDatabaseManager(config) {
    console.log(`[db] creating db service with config: ${JSON.stringify(config)}`);
    const manager = {};
    exports.readyChecks = {};
    const redis = config.redisConfig ? await (0, redisBuilder_1.redisBuilder)(manager, config.redisConfig) : null;
    if (config.pseudonyms) {
        console.log(`[db] init pseudonyms: ${JSON.stringify(config.pseudonyms)}`);
        await (0, pseudonymsBuilder_1.pseudonymsBuilder)(manager, config.pseudonyms);
    }
    if (config.transactionHistory) {
        console.log(`[db] init transactionHistory: ${JSON.stringify(config.transactionHistory)}`);
        await (0, transactionHistoryBuilder_1.transactionHistoryBuilder)(manager, config.transactionHistory, redis !== null);
    }
    if (config.transaction) {
        console.log(`[db] init transaction: ${JSON.stringify(config.transaction)}`);
        await (0, transactionBuilder_1.transactionBuilder)(manager, config.transaction, redis !== null);
    }
    if (config.configuration) {
        console.log(`[db] init confg: ${JSON.stringify(config.configuration)}`);
        await (0, configurationBuilder_1.configurationBuilder)(manager, config.configuration);
    }
    if (config.networkMap) {
        console.log(`[db] init networkmap: ${JSON.stringify(config.networkMap)}`);
        await (0, networkMapBuilder_1.networkMapBuilder)(manager, config.networkMap);
    }
    manager.isReadyCheck = () => exports.readyChecks;
    manager.quit = () => {
        redis?.quit();
        manager._pseudonymsDb?.close();
        manager._transactionHistory?.close();
        manager._configuration?.close();
        manager._networkMap?.close();
        manager._transaction?.close();
    };
    if (Object.values(exports.readyChecks).some((status) => status !== 'Ok')) {
        console.log(`[ERROR] - db - ${JSON.stringify(exports.readyChecks)}`);
        manager.quit();
        throw new Error(JSON.stringify(exports.readyChecks));
    }
    return manager;
}
exports.CreateDatabaseManager = CreateDatabaseManager;
//# sourceMappingURL=dbManager.js.map