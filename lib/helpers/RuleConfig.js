"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReadableDescription = void 0;
/**
 * This function picks the `desc` field of a RuleConfig, validates it and returns it or an error message if validation failed
 *
 * @remarks
 * This function treats empty strings and white-space-only strings as unreadable by humans
 *
 * @param ruleConfig - An optional object with a `desc` field
 * @returns A string denoting the current rule's description or a default if missing
 *
 */
const getReadableDescription = (ruleConfig) => {
    if (ruleConfig) {
        return ruleConfig.desc?.trim().length ? ruleConfig.desc : 'No description provided in rule config.';
    }
    return 'Rule description could not be retrieved.';
};
exports.getReadableDescription = getReadableDescription;
//# sourceMappingURL=RuleConfig.js.map