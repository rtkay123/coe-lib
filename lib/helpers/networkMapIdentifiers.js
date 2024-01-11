"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutesFromNetworkMap = exports.getIdsFromNetworkMap = void 0;
const unwrap_1 = require("./unwrap");
function getRuleMap(networkMap) {
    const rulesIds = new Array();
    const typologyCfg = new Array();
    if (networkMap)
        for (const Message of networkMap.messages) {
            if (Message.channels?.length)
                for (const channel of Message.channels) {
                    if (channel.typologies?.length)
                        for (const typology of channel.typologies) {
                            if (!typologyCfg.includes(typology.cfg))
                                typologyCfg.push(typology.cfg);
                            if (typology.rules?.length)
                                for (const rule of typology.rules) {
                                    if (!rulesIds.includes(rule.id))
                                        rulesIds.push(rule.id);
                                }
                        }
                }
        }
    return { rulesIds, typologyCfg };
}
const getIdsFromNetworkMap = async (databaseManager) => {
    const networkConfigurationList = await databaseManager.getNetworkMap();
    const unwrappedNetworkMap = (0, unwrap_1.unwrap)(networkConfigurationList);
    const networkMap = getRuleMap(unwrappedNetworkMap);
    return {
        rulesIds: networkMap.rulesIds,
        typologyCfg: networkMap.typologyCfg,
    };
};
exports.getIdsFromNetworkMap = getIdsFromNetworkMap;
const getRoutesFromNetworkMap = async (databaseManager, processor) => {
    const { typologyCfg, rulesIds } = await (0, exports.getIdsFromNetworkMap)(databaseManager);
    switch (processor) {
        case 'typology-processor':
            return {
                consumers: rulesIds.map((eachRuleId) => 'pub-rule-' + eachRuleId),
            };
        case 'transaction-aggregation-decisioning-processor':
            return {
                consumers: typologyCfg.map((eachTypologyCfg) => 'typology-' + eachTypologyCfg),
            };
        default:
            return { consumers: [''] };
    }
};
exports.getRoutesFromNetworkMap = getRoutesFromNetworkMap;
//# sourceMappingURL=networkMapIdentifiers.js.map