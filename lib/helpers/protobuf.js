"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageBuffer = void 0;
const tslib_1 = require("tslib");
const protobufjs_1 = tslib_1.__importDefault(require("protobufjs"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const root = protobufjs_1.default.loadSync(node_path_1.default.join(__dirname, '/proto/Full.proto'));
const FRMSMessage = root.lookupType('FRMSMessage');
/**
 * Create a `Buffer` derived from a byte array resulting from the input type
 *
 * @param {Record<string, unknown>} data The object to serialise to a `Buffer`
 * @returns {Buffer | undefined} The resulting `Buffer`, or `undefined` if an error occured
 */
const createMessageBuffer = (data) => {
    try {
        const msg = FRMSMessage.create(data);
        const enc = FRMSMessage.encode(msg).finish();
        return enc;
    }
    catch (error) {
        return undefined;
    }
};
exports.createMessageBuffer = createMessageBuffer;
exports.default = FRMSMessage;
//# sourceMappingURL=protobuf.js.map