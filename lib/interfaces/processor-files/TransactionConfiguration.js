"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionConfiguration = exports.Channel = exports.Typology = void 0;
class Typology {
    id = '';
    cfg = '';
    threshold = 0;
}
exports.Typology = Typology;
class Channel {
    id = '';
    cfg = '';
    typologies = [];
}
exports.Channel = Channel;
class TransactionConfiguration {
    id = '';
    cfg = '';
    txTp = '';
    channels = [];
}
exports.TransactionConfiguration = TransactionConfiguration;
//# sourceMappingURL=TransactionConfiguration.js.map