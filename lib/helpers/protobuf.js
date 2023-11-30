"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeLogBuffer = exports.createLogBuffer = exports.createMessageBuffer = void 0;
const tslib_1 = require("tslib");
const protobufjs_1 = tslib_1.__importDefault(require("protobufjs"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const root = protobufjs_1.default.loadSync(node_path_1.default.join(__dirname, '/proto/Full.proto'));
const FRMSMessage = root.lookupType('FRMSMessage');
const log = protobufjs_1.default.loadSync(node_path_1.default.join(__dirname, '/proto/Lumberjack.proto'));
const LogMessage = log.lookupType('LogMessage');
/**
 * Create a Message `Buffer` derived from a byte array resulting from the input type
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
/**
 * Create a Log `Buffer` derived from a byte array resulting from the input type
 *
 * @param {Record<string, unknown>} data The object to serialise to a `Buffer`
 * @returns {Buffer | undefined} The resulting `Buffer`, or `undefined` if an error occured
 */
const createLogBuffer = (data) => {
    try {
        const msg = LogMessage.create(data);
        const enc = LogMessage.encode(msg).finish();
        return enc;
    }
    catch (error) {
        return undefined;
    }
};
exports.createLogBuffer = createLogBuffer;
/**
 * Decodes a Log `Buffer` derived from a byte array resulting in a concrete `LogMessage` type
 *
 * @param {Buffer} buffer The byte array to decode to a `LogMessage`
 * @returns {LogMessage | undefined} The resulting `LogMessage`, or `undefined` if an error occured
 */
const decodeLogBuffer = (buffer) => {
    const decodedMessage = LogMessage.decode(buffer);
    return LogMessage.toObject(decodedMessage);
};
exports.decodeLogBuffer = decodeLogBuffer;
exports.default = FRMSMessage;
//# sourceMappingURL=protobuf.js.map