"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisBuilder = void 0;
const __1 = require("..");
const formatter_1 = require("../helpers/formatter");
const dbManager_1 = require("../services/dbManager");
async function redisBuilder(manager, redisConfig) {
    try {
        const redis = await __1.RedisService.create(redisConfig);
        manager._redisClient = redis._redisClient;
        manager.getJson = redis.getJson;
        manager.getBuffer = redis.getBuffer;
        manager.getMembers = redis.getMembers;
        manager.getMemberValues = redis.getMemberValues;
        manager.deleteKey = redis.deleteKey;
        manager.setJson = redis.setJson;
        manager.set = redis.set;
        manager.setAdd = redis.setAdd;
        manager.addOneGetAll = redis.addOneGetAll;
        manager.addOneGetCount = redis.addOneGetCount;
        dbManager_1.readyChecks.Redis = 'Ok';
        return redis;
    }
    catch (error) {
        const err = error;
        dbManager_1.readyChecks.Redis = `err, ${(0, formatter_1.formatError)(err)}`;
    }
}
exports.redisBuilder = redisBuilder;
//# sourceMappingURL=redisBuilder.js.map