"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrap = void 0;
/**
 * Takes a generic 2D array and returns the item at index `[0][0]` if it's not loosely equal to `null`
 *
 * @remarks
 * This function's intention is to 'unwrap' results coming from calls made by this library.
 *
 * @param type - A generic two dimensional array
 * @returns The item at `[0][0]` or `undefined` if and the indexed item is loosely equal to `null`
 *
 */
const unwrap = (type) => {
    try {
        if (type[0][0] != null) {
            return type[0][0];
        }
        return undefined;
    }
    catch (error) {
        return undefined;
    }
};
exports.unwrap = unwrap;
//# sourceMappingURL=unwrap.js.map