"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMSRequest = void 0;
const __1 = require("..");
const Alert_1 = require("./Alert");
class CMSRequest {
    message = '';
    report = new Alert_1.Alert();
    transaction;
    networkMap = new __1.NetworkMap();
}
exports.CMSRequest = CMSRequest;
//# sourceMappingURL=CMSRequest.js.map