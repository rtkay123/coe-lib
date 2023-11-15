"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionHistoryBuilder = void 0;
const tslib_1 = require("tslib");
const arangojs_1 = require("arangojs");
const fs = tslib_1.__importStar(require("fs"));
const formatter_1 = require("../helpers/formatter");
const readyCheck_1 = require("../helpers/readyCheck");
const interfaces_1 = require("../interfaces");
const ArangoCollections_1 = require("../interfaces/ArangoCollections");
const dbManager_1 = require("../services/dbManager");
async function transactionHistoryBuilder(manager, transactionHistoryConfig, redis) {
    manager._transactionHistory = new arangojs_1.Database({
        url: transactionHistoryConfig.url,
        databaseName: transactionHistoryConfig.databaseName,
        auth: {
            username: transactionHistoryConfig.user,
            password: transactionHistoryConfig.password,
        },
        agentOptions: {
            ca: fs.existsSync(transactionHistoryConfig.certPath) ? [fs.readFileSync(transactionHistoryConfig.certPath)] : [],
        },
    });
    try {
        const dbReady = await (0, readyCheck_1.isDatabaseReady)(manager._transactionHistory);
        dbManager_1.readyChecks.TransactionHistoryDB = dbReady ? 'Ok' : 'err';
    }
    catch (error) {
        const err = error;
        dbManager_1.readyChecks.TransactionHistoryD = `err, ${(0, formatter_1.formatError)(err)}`;
    }
    manager.queryTransactionDB = async (collection, filter, limit) => {
        const db = manager._transactionHistory?.collection(collection);
        const aqlFilter = (0, arangojs_1.aql) `${filter}`;
        const aqlLimit = limit ? (0, arangojs_1.aql) `LIMIT ${limit}` : undefined;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER ${aqlFilter}
      ${aqlLimit}
      RETURN doc
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    if (redis) {
        manager.getTransactionPacs008 = async (endToEndId, cacheKey = '') => {
            let cacheVal = [];
            if (cacheKey !== '') {
                cacheVal = await manager.getMembers(cacheKey);
                if (cacheVal.length > 0)
                    return await Promise.resolve(cacheVal);
            }
            const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pacs008);
            const query = (0, arangojs_1.aql) `
        FOR doc IN ${db}
        FILTER doc.FIToFICstmrCdt.CdtTrfTxInf.PmtId.EndToEndId == ${endToEndId}
        RETURN doc
      `;
            return await (await manager._transactionHistory?.query(query))?.batches.all();
        };
    }
    else {
        manager.getTransactionPacs008 = async (endToEndId) => {
            const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pacs008);
            const query = (0, arangojs_1.aql) `
        FOR doc IN ${db}
        FILTER doc.FIToFICstmrCdt.CdtTrfTxInf.PmtId.EndToEndId == ${endToEndId}
        RETURN doc
      `;
            return await (await manager._transactionHistory?.query(query))?.batches.all();
        };
    }
    manager.getTransactionPain001 = async (endToEndId) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pain001);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf.PmtId.EndToEndId == ${endToEndId}
      RETURN doc
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getDebtorPain001Msgs = async (debtorId) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pain001);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.CstmrCdtTrfInitn.PmtInf.DbtrAcct.Id.Othr.Id == ${debtorId}
      SORT doc.CstmrCdtTrfInitn.GrpHdr.CreDtTm
      LIMIT 1
      RETURN doc
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getCreditorPain001Msgs = async (creditorId) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pain001);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf.CdtrAcct.Id.Othr.Id == ${creditorId}
      SORT doc.CstmrCdtTrfInitn.GrpHdr.CreDtTm
      LIMIT 1
      RETURN doc
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getSuccessfulPacs002Msgs = async (endToEndId) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pacs002);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.FIToFIPmtSts.TxInfAndSts.OrgnlEndToEndId == ${endToEndId}
      && doc.FIToFIPmtSts.TxInfAndSts.TxSts == 'ACCC'
      SORT doc.FIToFIPmtSts.GrpHdr.CreDtTm DESC
      LIMIT 1
      RETURN doc
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getSuccessfulPacs002EndToEndIds = async (endToEndIds) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pacs002);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.FIToFIPmtSts.TxInfAndSts.OrgnlEndToEndId IN ${endToEndIds}
      FILTER doc.FIToFIPmtSts.TxInfAndSts.TxSts == 'ACCC'
      RETURN doc.FIToFIPmtSts.TxInfAndSts.OrgnlEndToEndId
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getDebtorPacs002Msgs = async (endToEndId) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pacs002);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.FIToFIPmtSts.TxInfAndSts.OrgnlEndToEndId == ${endToEndId}
      RETURN doc
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getEquivalentPain001Msg = async (endToEndIds) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pain001);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf.PmtId.EndToEndId IN ${endToEndIds}
      SORT  doc.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf.PmtId.EndToEndId DESC
      RETURN doc.CstmrCdtTrfInitn.PmtInf.CdtTrfTxInf.RmtInf.Ustrd
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getAccountEndToEndIds = async (accountId, accountType) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pacs008);
        const filterType = accountType === interfaces_1.AccountType.CreditorAcct
            ? (0, arangojs_1.aql) `FILTER doc.FIToFICstmrCdt.CdtTrfTxInf.CdtrAcct.Id.Othr.Id == ${accountId}`
            : (0, arangojs_1.aql) `FILTER doc.FIToFICstmrCdt.CdtTrfTxInf.DbtrAcct.Id.Othr.Id == ${accountId}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      ${filterType}
      RETURN {
        e2eId: doc.FIToFICstmrCdt.CdtTrfTxInf.PmtId.EndToEndId,
        timestamp: DATE_TIMESTAMP(doc.FIToFICstmrCdt.GrpHdr.CreDtTm)
      }
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    manager.getAccountHistoryPacs008Msgs = async (accountId, accountType) => {
        const db = manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.pacs008);
        const filterType = accountType === interfaces_1.AccountType.CreditorAcct
            ? (0, arangojs_1.aql) `FILTER doc.FIToFICstmrCdt.CdtTrfTxInf.CdtrAcct.Id.Othr.Id == ${accountId}`
            : (0, arangojs_1.aql) `FILTER doc.FIToFICstmrCdt.CdtTrfTxInf.DbtrAcct.Id.Othr.Id == ${accountId}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      ${filterType}
      RETURN doc
    `;
        return await (await manager._transactionHistory?.query(query))?.batches.all();
    };
    if (!manager._transaction) {
        manager.insertTransaction = async (transactionID, transaction, networkMap, alert) => {
            const data = {
                transactionID,
                transaction,
                networkMap,
                report: alert,
            };
            return await manager._transactionHistory?.collection(ArangoCollections_1.dbTransactions.transactions).save(data, { overwriteMode: 'ignore' });
        };
    }
    manager.saveTransactionHistory = async (tran, col) => {
        const db = manager._transactionHistory?.collection(col);
        return await db?.save(tran, { overwriteMode: 'ignore' });
    };
}
exports.transactionHistoryBuilder = transactionHistoryBuilder;
//# sourceMappingURL=transactionHistoryBuilder.js.map