"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apm = void 0;
const tslib_1 = require("tslib");
const elastic_apm_node_1 = tslib_1.__importDefault(require("elastic-apm-node"));
class Apm {
    #transaction = () => null;
    #span = () => null;
    #traceParent = () => null;
    constructor(apmOptions) {
        const apmEnabled = apmOptions && apmOptions.active;
        if (apmEnabled) {
            elastic_apm_node_1.default.start(apmOptions);
            this.#transaction = (name, options) => elastic_apm_node_1.default.startTransaction(name, options);
            this.#span = (name) => elastic_apm_node_1.default.startSpan(name);
            this.#traceParent = () => elastic_apm_node_1.default.currentTraceparent;
        }
    }
    startTransaction = (name, options) => {
        return this.#transaction(name, options);
    };
    startSpan = (name) => {
        return this.#span(name);
    };
    getCurrentTraceparent = () => {
        return this.#traceParent();
    };
}
exports.Apm = Apm;
//# sourceMappingURL=apm.js.map