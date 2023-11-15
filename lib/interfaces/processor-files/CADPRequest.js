"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedResult = exports.CADPRequest = void 0;
class CADPRequest {
    typologyResult;
    transaction;
    networkMap;
    metaData;
    constructor(typologyResult, transaction, networkMap, ruleResults) {
        this.typologyResult = typologyResult;
        this.transaction = transaction;
        this.networkMap = networkMap;
        this.typologyResult.ruleResults = ruleResults;
    }
}
exports.CADPRequest = CADPRequest;
class CombinedResult {
    typologyResult = '';
    cadpRequests = [];
}
exports.CombinedResult = CombinedResult;
//# sourceMappingURL=CADPRequest.js.map