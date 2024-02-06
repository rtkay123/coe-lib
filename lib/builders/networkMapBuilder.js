"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkMapBuilder = void 0;
const arangojs_1 = require("arangojs");
const formatter_1 = require("../helpers/formatter");
const readyCheck_1 = require("../helpers/readyCheck");
const ArangoCollections_1 = require("../interfaces/ArangoCollections");
const dbManager_1 = require("../services/dbManager");
async function networkMapBuilder(manager, NetworkMapConfig) {
    manager._networkMap = new arangojs_1.Database({
        url: NetworkMapConfig.url,
        databaseName: NetworkMapConfig.databaseName,
        auth: {
            username: NetworkMapConfig.user,
            password: NetworkMapConfig.password,
        },
        agentOptions: {
            rejectUnauthorized: false,
        },
    });
    try {
        const dbReady = await (0, readyCheck_1.isDatabaseReady)(manager._networkMap);
        dbManager_1.readyChecks.NetworkMapDB = dbReady ? 'Ok' : 'err';
    }
    catch (error) {
        const err = error;
        dbManager_1.readyChecks.NetworkMapDB = `err, ${(0, formatter_1.formatError)(err)}`;
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