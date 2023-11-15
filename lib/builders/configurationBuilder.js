"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationBuilder = void 0;
const tslib_1 = require("tslib");
const arangojs_1 = require("arangojs");
const fs = tslib_1.__importStar(require("fs"));
const node_cache_1 = tslib_1.__importDefault(require("node-cache"));
const formatter_1 = require("../helpers/formatter");
const readyCheck_1 = require("../helpers/readyCheck");
const ArangoCollections_1 = require("../interfaces/ArangoCollections");
const dbManager_1 = require("../services/dbManager");
async function configurationBuilder(manager, configurationConfig) {
    manager._configuration = new arangojs_1.Database({
        url: configurationConfig.url,
        databaseName: configurationConfig.databaseName,
        auth: {
            username: configurationConfig.user,
            password: configurationConfig.password,
        },
        agentOptions: {
            ca: fs.existsSync(configurationConfig.certPath) ? [fs.readFileSync(configurationConfig.certPath)] : [],
        },
    });
    try {
        const dbReady = await (0, readyCheck_1.isDatabaseReady)(manager._configuration);
        dbManager_1.readyChecks.ConfigurationDB = dbReady ? 'Ok' : 'err';
    }
    catch (error) {
        const err = error;
        dbManager_1.readyChecks.ConfigurationDB = `err, ${(0, formatter_1.formatError)(err)}`;
    }
    manager.setupConfig = configurationConfig;
    manager.nodeCache = new node_cache_1.default();
    manager.queryConfigurationDB = async (collection, filter, limit) => {
        const db = manager._configuration?.collection(collection);
        const aqlFilter = (0, arangojs_1.aql) `${filter}`;
        const aqlLimit = limit ? (0, arangojs_1.aql) `LIMIT ${limit}` : undefined;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER ${aqlFilter}
      ${aqlLimit}
      RETURN doc
    `;
        return await (await manager._configuration?.query(query))?.batches.all();
    };
    manager.getRuleConfig = async (ruleId, cfg, limit) => {
        const cacheKey = `${ruleId}_${cfg}`;
        if (manager.setupConfig?.localCacheEnabled ?? false) {
            const cacheVal = manager.nodeCache?.get(cacheKey);
            if (cacheVal)
                return await Promise.resolve(cacheVal);
        }
        const aqlLimit = limit ? (0, arangojs_1.aql) `LIMIT ${limit}` : undefined;
        const db = manager._configuration?.collection(ArangoCollections_1.dbConfiguration.self);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.id == ${ruleId}
      FILTER doc.cfg == ${cfg}
      ${aqlLimit}
      RETURN doc
    `;
        const toReturn = await (await manager._configuration?.query(query))?.batches.all();
        if (manager.setupConfig?.localCacheEnabled && toReturn && toReturn[0] && toReturn[0].length === 1)
            manager.nodeCache?.set(cacheKey, toReturn, manager.setupConfig?.localCacheTTL ?? 3000);
        return toReturn;
    };
    manager.getTransactionConfig = async (transctionId, cfg) => {
        const cacheKey = `${transctionId}_${cfg}`;
        if (manager.setupConfig?.localCacheEnabled ?? false) {
            const cacheVal = manager.nodeCache?.get(cacheKey);
            if (cacheVal)
                return await Promise.resolve(cacheVal);
        }
        const db = manager._configuration?.collection(ArangoCollections_1.dbConfiguration.transactionConfiguration);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.id == ${transctionId}
      FILTER doc.cfg == ${cfg}
      RETURN doc
    `;
        const toReturn = await (await manager._configuration?.query(query))?.batches.all();
        if (manager.setupConfig?.localCacheEnabled && toReturn && toReturn[0] && toReturn[0].length === 1)
            manager.nodeCache?.set(cacheKey, toReturn, manager.setupConfig?.localCacheTTL ?? 3000);
        return toReturn;
    };
    manager.getTypologyExpression = async (typology) => {
        const cacheKey = `${typology.id}_${typology.cfg}`;
        if (manager.setupConfig?.localCacheEnabled ?? false) {
            const cacheVal = manager.nodeCache?.get(cacheKey);
            if (cacheVal)
                return await Promise.resolve(cacheVal);
        }
        const db = manager._configuration?.collection(ArangoCollections_1.dbConfiguration.typologyExpression);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.id == ${typology.id} AND doc.cfg == ${typology.cfg}
      RETURN doc
    `;
        const toReturn = await (await manager._configuration?.query(query))?.batches.all();
        if (manager.setupConfig?.localCacheEnabled && toReturn && toReturn[0] && toReturn[0].length === 1)
            manager.nodeCache?.set(cacheKey, toReturn, manager.setupConfig?.localCacheTTL ?? 3000);
        return toReturn;
    };
}
exports.configurationBuilder = configurationBuilder;
//# sourceMappingURL=configurationBuilder.js.map