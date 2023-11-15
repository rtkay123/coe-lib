"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbNetworkMap = exports.dbConfiguration = exports.dbPseudonyms = exports.dbTransactions = void 0;
const schema = {
    transactions: {
        pacs008: 'transactionHistoryPacs008',
        pacs002: 'transactionHistoryPacs002',
        pain001: 'transactionHistoryPain001',
        transactions: 'transactions',
    },
    pseudonyms: {
        self: 'pseudonyms',
        accounts: 'accounts',
        account_holder: 'account_holder',
        entities: 'entities',
        transactionRelationship: 'transactionRelationship',
    },
    networkMap: {
        netConfig: 'networkConfiguration',
    },
    config: {
        self: 'configuration',
        typologyExpression: 'typologyExpression',
        transactionConfiguration: 'transactionConfiguration',
    },
};
const { transactions, pseudonyms, networkMap, config } = schema;
const dbTransactions = Object.freeze(transactions);
exports.dbTransactions = dbTransactions;
const dbPseudonyms = Object.freeze(pseudonyms);
exports.dbPseudonyms = dbPseudonyms;
const dbConfiguration = Object.freeze(config);
exports.dbConfiguration = dbConfiguration;
const dbNetworkMap = Object.freeze(networkMap);
exports.dbNetworkMap = dbNetworkMap;
//# sourceMappingURL=ArangoCollections.js.map