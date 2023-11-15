"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const uuid_1 = require("uuid");
const TADPResult_1 = require("./TADPResult");
const metaData_1 = require("../metaData");
class Alert {
    evaluationID = (0, uuid_1.v4)();
    metaData = new metaData_1.MetaData();
    status = ''; // eg ALRT
    timestamp = new Date();
    tadpResult = new TADPResult_1.TADPResult();
}
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map