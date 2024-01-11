"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseNetworkMapMocks = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const data_1 = require("../data");
const DatabaseNetworkMapMocks = (databaseManager) => {
    jest.spyOn(databaseManager, 'getNetworkMap').mockImplementation(async () => {
        return await Promise.resolve(data_1.NetworkMapSample);
    });
};
exports.DatabaseNetworkMapMocks = DatabaseNetworkMapMocks;
//# sourceMappingURL=mock-networkmap.js.map