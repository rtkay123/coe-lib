"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionBuilder = void 0;
const arangojs_1 = require("arangojs");
const dbManager_1 = require("../services/dbManager");
const readyCheck_1 = require("../helpers/readyCheck");
const aql_1 = require("arangojs/aql");
const formatter_1 = require("../helpers/formatter");
async function transactionBuilder(manager, transactionHistoryConfig, redis) {
    console.log('instantiating [transactionHistoryConfig] database');
    manager._transaction = new arangojs_1.Database({
        url: transactionHistoryConfig.url,
        databaseName: transactionHistoryConfig.databaseName,
        precaptureStackTraces: true,
        auth: {
            username: transactionHistoryConfig.user,
            password: transactionHistoryConfig.password,
        },
        agentOptions: {
            rejectUnauthorized: false,
        },
    });
    console.log('waiting for [transactionHistoryConfig] database to be ready');
    try {
        const dbReady = await (0, readyCheck_1.isDatabaseReady)(manager._transaction);
        console.log(`[transactionHistoryConfig] db ok: ${dbReady}`);
        dbManager_1.readyChecks.TransactionDB = dbReady ? 'Ok' : 'err';
    }
    catch (err) {
        dbManager_1.readyChecks.TransactionDB = `err, ${(0, formatter_1.formatError)(err)}`;
        dbManager_1.readyChecks.TransactionDB = err;
        console.log(`[transactionHistoryConfig] db err: ${dbManager_1.readyChecks.TransactionDB}`);
    }
    manager.queryTransactionDB = async (collection, filter, limit) => {
        const db = manager._transaction?.collection(collection);
        const aqlFilter = (0, aql_1.aql) `${filter}`;
        const aqlLimit = limit ? (0, aql_1.aql) `LIMIT ${limit}` : undefined;
        const query = (0, aql_1.aql) `
      FOR doc IN ${db}
      FILTER ${aqlFilter}
      ${aqlLimit}
      RETURN doc
    `;
        return await (await manager._transaction?.query(query))?.batches.all();
    };
    manager.insertTransaction = async (transactionID, transaction, networkMap, alert) => {
        const data = {
            transactionID,
            transaction,
            networkMap,
            report: alert,
        };
        return await manager._transaction?.collection('transactions').save(data, { overwriteMode: 'ignore' });
    };
}
exports.transactionBuilder = transactionBuilder;
//# sourceMappingURL=transactionBuilder.js.map