"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkMapBuilder = void 0;
const arangojs_1 = require("arangojs");
const formatter_1 = require("../helpers/formatter");
const readyCheck_1 = require("../helpers/readyCheck");
const ArangoCollections_1 = require("../interfaces/ArangoCollections");
const dbManager_1 = require("../services/dbManager");
async function networkMapBuilder(manager, NetworkMapConfig) {
    console.log('instantiating [networkmap] database');
    manager._networkMap = new arangojs_1.Database({
        url: NetworkMapConfig.url,
        databaseName: NetworkMapConfig.databaseName,
        precaptureStackTraces: true,
        auth: {
            username: NetworkMapConfig.user,
            password: NetworkMapConfig.password,
        },
        agentOptions: {
            rejectUnauthorized: false,
        },
    });
    console.log('waiting for [networkmap] database to be ready');
    try {
        const dbReady = await (0, readyCheck_1.isDatabaseReady)(manager._networkMap);
        console.log(`[networkmap] db ok: ${dbReady}`);
        dbManager_1.readyChecks.NetworkMapDB = dbReady ? 'Ok' : 'err';
    }
    catch (error) {
        const err = error;
        dbManager_1.readyChecks.NetworkMapDB = `err, ${(0, formatter_1.formatError)(err)}`;
        console.log(`[networkmap] db err: ${dbManager_1.readyChecks.PseudonymsDB}`);
    }
    manager.getNetworkMap = async () => {
        const db = manager._networkMap?.collection(ArangoCollections_1.dbNetworkMap.netConfig);
        const networkConfigurationQuery = (0, arangojs_1.aql) `
        FOR doc IN ${db}
        FILTER doc.active == true
        RETURN doc
      `;
        return await (await manager._networkMap?.query(networkConfigurationQuery))?.batches.all();
    };
}
exports.networkMapBuilder = networkMapBuilder;
//# sourceMappingURL=networkMapBuilder.js.map