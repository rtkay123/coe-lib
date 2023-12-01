/// <reference types="node" />
import protobuf from 'protobufjs';
import { type LogMessage as LogMessageType } from './proto/lumberjack/LogMessage';
declare const FRMSMessage: protobuf.Type;
/**
 * Create a Message `Buffer` derived from a byte array resulting from the input type
 *
 * @param {Record<string, unknown>} data The object to serialise to a `Buffer`
 * @returns {Buffer | undefined} The resulting `Buffer`, or `undefined` if an error occured
 */
export declare const createMessageBuffer: (data: Record<string, unknown>) => Buffer | undefined;
/**
 * Create a Log `Buffer` derived from a byte array resulting from the input type
 *
 * @param {Record<string, unknown>} data The object to serialise to a `Buffer`
 * @returns {Buffer | undefined} The resulting `Buffer`, or `undefined` if an error occured
 */
export declare const createLogBuffer: (data: Record<string, unknown>) => Buffer | undefined;
/**
 * Decodes a Log `Buffer` derived from a byte array resulting in a concrete `LogMessage` type
 *
 * @param {Buffer} buffer The byte array to decode to a `LogMessage`
 * @returns {LogMessage | undefined} The resulting `LogMessage`, or `undefined` if an error occured
 */
export declare const decodeLogBuffer: (buffer: Buffer) => LogMessageType | undefined;
export default FRMSMessage;
