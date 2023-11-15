/// <reference types="node" />
import protobuf from 'protobufjs';
declare const FRMSMessage: protobuf.Type;
/**
 * Create a `Buffer` derived from a byte array resulting from the input type
 *
 * @param {Record<string, unknown>} data The object to serialise to a `Buffer`
 * @returns {Buffer | undefined} The resulting `Buffer`, or `undefined` if an error occured
 */
export declare const createMessageBuffer: (data: Record<string, unknown>) => Buffer | undefined;
export default FRMSMessage;
