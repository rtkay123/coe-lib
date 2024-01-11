"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseManagerMocks = exports.CacheDatabaseClientMocks = void 0;
const pacs008_1 = require("../data/pacs008");
const pain001_1 = require("../data/pain001");
const data_1 = require("../data");
/* eslint-disable @typescript-eslint/no-explicit-any */
const CacheDatabaseClientMocks = (cacheDatabaseClient) => {
    jest.spyOn(cacheDatabaseClient, 'addAccount').mockImplementation(async () => {
        await Promise.resolve();
    });
    jest.spyOn(cacheDatabaseClient, 'addEntity').mockImplementation(async () => {
        await Promise.resolve();
    });
    jest.spyOn(cacheDatabaseClient, 'addAccountHolder').mockImplementation(async () => {
        await Promise.resolve();
    });
    jest.spyOn(cacheDatabaseClient, 'saveTransactionRelationship').mockImplementation(async () => {
        await Promise.resolve();
    });
    jest.spyOn(cacheDatabaseClient, 'saveTransactionHistory').mockImplementation(async () => {
        await Promise.resolve();
    });
};
exports.CacheDatabaseClientMocks = CacheDatabaseClientMocks;
const DatabaseManagerMocks = (databaseManager, cacheString) => {
    // Arango Database Transaction History Mocks
    if (databaseManager.isReadyCheck()?.transactionHistory === 'Ok') {
        jest.spyOn(databaseManager, 'getTransactionPain001').mockImplementation(async () => {
            return await Promise.resolve([[pain001_1.Pain001Sample]]);
        });
        jest.spyOn(databaseManager, 'getTransactionPacs008').mockImplementation(async (pseudonym) => {
            return await Promise.resolve([[pacs008_1.Pacs008Sample]]);
        });
    }
    // Arango Database Network Map Mocks
    if (databaseManager.isReadyCheck()?.networkMap === 'Ok') {
        jest.spyOn(databaseManager, 'getNetworkMap').mockImplementation(async () => {
            return await Promise.resolve(data_1.NetworkMapSample);
        });
    }
    if (databaseManager.isReadyCheck()?.configuration === 'Ok') {
        jest.spyOn(databaseManager, 'getNetworkMap').mockImplementation(async () => {
            return await Promise.resolve(data_1.NetworkMapSample);
        });
    }
    // Redis Mocks
    if (databaseManager.isReadyCheck()?.Redis === 'Ok') {
        jest.spyOn(databaseManager, 'setJson').mockImplementation(async () => {
            await Promise.resolve();
        });
    }
};
exports.DatabaseManagerMocks = DatabaseManagerMocks;
//# sourceMappingURL=mock-transactions.js.map