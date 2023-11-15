"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkFlow = exports.TypologyResult = void 0;
class TypologyResult {
    id = '';
    cfg = '';
    prcgTm = 0;
    result = 0.0;
    review = false;
    ruleResults = [];
    workflow = new WorkFlow();
}
exports.TypologyResult = TypologyResult;
class WorkFlow {
    alertThreshold = 0;
    interdictionThreshold = 0;
}
exports.WorkFlow = WorkFlow;
//# sourceMappingURL=TypologyResult.js.map