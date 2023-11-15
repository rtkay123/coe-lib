"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudonymsBuilder = void 0;
const tslib_1 = require("tslib");
const arangojs_1 = require("arangojs");
const aql_1 = require("arangojs/aql");
const fs = tslib_1.__importStar(require("fs"));
const formatter_1 = require("../helpers/formatter");
const readyCheck_1 = require("../helpers/readyCheck");
const ArangoCollections_1 = require("../interfaces/ArangoCollections");
const dbManager_1 = require("../services/dbManager");
async function pseudonymsBuilder(manager, pseudonymsConfig) {
    manager._pseudonymsDb = new arangojs_1.Database({
        url: pseudonymsConfig.url,
        databaseName: pseudonymsConfig.databaseName,
        auth: {
            username: pseudonymsConfig.user,
            password: pseudonymsConfig.password,
        },
        agentOptions: {
            ca: fs.existsSync(pseudonymsConfig.certPath) ? [fs.readFileSync(pseudonymsConfig.certPath)] : [],
        },
    });
    try {
        const dbReady = await (0, readyCheck_1.isDatabaseReady)(manager._pseudonymsDb);
        dbManager_1.readyChecks.PseudonymsDB = dbReady ? 'Ok' : 'err';
    }
    catch (error) {
        const err = error;
        dbManager_1.readyChecks.PseudonymsDB = `err, ${(0, formatter_1.formatError)(err)}`;
    }
    manager.queryPseudonymDB = async (collection, filter, limit) => {
        const db = manager._pseudonymsDb?.collection(collection);
        const aqlFilter = (0, arangojs_1.aql) `${filter}`;
        const aqlLimit = limit ? (0, arangojs_1.aql) `LIMIT ${limit}` : undefined;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER ${aqlFilter}
      ${aqlLimit}
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getPseudonyms = async (hash) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.self);
        const query = (0, arangojs_1.aql) `
      FOR i IN ${db}
      FILTER i.pseudonym == ${hash}
      RETURN i
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.addAccount = async (hash) => {
        const data = { _key: hash };
        return await manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.accounts).save(data, { overwriteMode: 'ignore' });
    };
    manager.saveTransactionRelationship = async (tR) => {
        const data = {
            _key: tR.MsgId,
            _from: tR.from,
            _to: tR.to,
            TxTp: tR.TxTp,
            TxSts: tR.TxSts,
            CreDtTm: tR.CreDtTm,
            Amt: tR.Amt,
            Ccy: tR.Ccy,
            PmtInfId: tR.PmtInfId,
            EndToEndId: tR.EndToEndId,
            lat: tR.lat,
            long: tR.long,
        };
        return await manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship).save(data, { overwriteMode: 'ignore' });
    };
    manager.getPacs008Edge = async (endToEndIds) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.EndToEndId IN ${endToEndIds} && doc.TxTp == 'pacs.008.001.10'
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getPacs008Edges = async (accountId, threshold, amount) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const account = `accounts/${accountId}`;
        const filters = [(0, arangojs_1.aql) `FILTER doc.TxTp == 'pacs.008.001.10' && doc._to == ${account}`];
        if (threshold !== undefined)
            filters.push((0, arangojs_1.aql) `FILTER doc.CreDtTm < ${threshold}`);
        if (amount !== undefined)
            filters.push((0, arangojs_1.aql) `FILTER doc.Amt == ${amount}`);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      ${(0, aql_1.join)(filters)}
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getPacs002Edge = async (endToEndIds) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc.EndToEndId IN ${endToEndIds} && doc.TxTp == 'pacs.002.001.12'
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getDebtorPacs002Edges = async (debtorId) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const debtorAccount = `accounts/${debtorId}`;
        const debtorAccountAql = (0, arangojs_1.aql) `${debtorAccount}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._from == ${debtorAccountAql}
      FILTER doc.TxTp == 'pacs.002.001.12' && doc.TxSts == 'ACCC'
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getIncomingPacs002Edges = async (accountId, limit) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const account = `accounts/${accountId}`;
        const accountAql = (0, arangojs_1.aql) `${account}`;
        const aqlLimit = limit ? (0, arangojs_1.aql) `LIMIT ${limit}` : undefined;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._to == ${accountAql}
      FILTER doc.TxTp == 'pacs.002.001.12' && doc.TxSts == 'ACCC'
      ${aqlLimit}
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getOutgoingPacs002Edges = async (accountId, limit) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const account = `accounts/${accountId}`;
        const accountAql = (0, arangojs_1.aql) `${account}`;
        const aqlLimit = limit ? (0, arangojs_1.aql) `LIMIT ${limit}` : undefined;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._from == ${accountAql}
      FILTER doc.TxTp == 'pacs.002.001.12' && doc.TxSts == 'ACCC'
      ${aqlLimit}
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getSuccessfulPacs002Edges = async (creditorId, debtorId, endToEndId) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const debtorAccount = `accounts/${debtorId}`;
        const debtorAccountAql = (0, arangojs_1.aql) `${debtorAccount}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._to IN ${creditorId}
      FILTER doc._from == ${debtorAccountAql}
      FILTER doc.TxTp == 'pacs.002.001.12'
      FILTER doc.EndToEndId IN ${endToEndId}
      FILTER doc.TxSts == 'ACCC'
      SORT   doc.CreDtTm DESC
      LIMIT 2
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getDebtorPacs008Edges = async (debtorId, endToEndId = '') => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const debtorAccount = `accounts/${debtorId}`;
        const debtorAccountAql = (0, arangojs_1.aql) `${debtorAccount}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._from == ${debtorAccountAql}
      FILTER doc.TxTp == 'pacs.008.001.10'
      SORT   doc.CreDtTm DESC
      LIMIT 2
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getCreditorPacs008Edges = async (creditorId) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const creditorAccount = `accounts/${creditorId}`;
        const creditorAccountAql = (0, arangojs_1.aql) `${creditorAccount}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._to == ${creditorAccountAql}
      FILTER doc.TxTp == 'pacs.008.001.10'
      SORT   doc.CreDtTm DESC
      LIMIT 2
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getPreviousPacs008Edges = async (accountId, limit, to) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const filters = [];
        filters.push((0, arangojs_1.aql) `FILTER doc.TxTp == 'pacs.008.001.10'`);
        if (to !== undefined)
            filters.push((0, arangojs_1.aql) `FILTER doc._to IN ${to}`);
        const aqlLimit = limit ? (0, arangojs_1.aql) `${limit}` : (0, arangojs_1.aql) `3`;
        const account = `accounts/${accountId}`;
        const accountAql = (0, arangojs_1.aql) `${account}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._from == ${accountAql}
      ${(0, aql_1.join)(filters)}
      SORT doc.CreDtTm DESC
      LIMIT ${aqlLimit}
      RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.getCreditorPacs002Edges = async (creditorId, threshold) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.transactionRelationship);
        const date = new Date(new Date().getTime() - threshold).toISOString();
        const creditorAccount = `accounts/${creditorId}`;
        const creditorAccountAql = (0, arangojs_1.aql) `${creditorAccount}`;
        const query = (0, arangojs_1.aql) `
      FOR doc IN ${db}
      FILTER doc._from == '${creditorAccountAql}' && doc.TxTp == 'pacs.002.001.12' && doc.TxSts == 'ACCC' && doc.CreDtTm >= ${date}
        RETURN doc
    `;
        return await (await manager._pseudonymsDb?.query(query))?.batches.all();
    };
    manager.saveAccount = async (key) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.accounts);
        return await db?.save({ _key: key }, { overwriteMode: 'ignore' });
    };
    manager.saveEntity = async (entityId, CreDtTm) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.entities);
        return await db?.save({ _key: entityId, Id: entityId, CreDtTm }, { overwriteMode: 'ignore' });
    };
    manager.saveAccountHolder = async (entityId, accountId, CreDtTm) => {
        const db = manager._pseudonymsDb?.collection(ArangoCollections_1.dbPseudonyms.account_holder);
        const _key = `${accountId}${entityId}`;
        const _from = `entities/${entityId}`;
        const _to = `accounts/${accountId}`;
        return await db?.save({ _key, _from, _to, CreDtTm }, { overwriteMode: 'ignore' });
    };
}
exports.pseudonymsBuilder = pseudonymsBuilder;
//# sourceMappingURL=pseudonymsBuilder.js.map