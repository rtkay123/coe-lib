"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDatabaseReady = void 0;
async function isDatabaseReady(db) {
    if (db?.name === '_system' || !db?.isArangoDatabase || !(await db.exists())) {
        return false;
    }
    return true;
}
exports.isDatabaseReady = isDatabaseReady;
//# sourceMappingURL=readyCheck.js.map