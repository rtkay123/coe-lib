"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkMap = exports.Message = exports.Channel = exports.Typology = exports.Rule = void 0;
/* eslint-disable */
class Rule {
    id = '';
    cfg = '';
    host = '';
    typologies = [];
    getStrValue() {
        return `${this.id}${this.cfg}`;
    }
}
exports.Rule = Rule;
class Typology {
    id = '';
    host = '';
    cfg = '';
    desc = '';
    rules = [];
    constructor(typology_id, cfg, host) {
        this.id = typology_id;
        this.cfg = cfg;
        this.host = host;
    }
}
exports.Typology = Typology;
class Channel {
    id = '';
    host = '';
    cfg = '';
    typologies = [];
}
exports.Channel = Channel;
class Message {
    id = '';
    host = '';
    cfg = '';
    txTp = '';
    channels = [];
}
exports.Message = Message;
class NetworkMap {
    active = false;
    cfg = '';
    messages = [];
}
exports.NetworkMap = NetworkMap;
//# sourceMappingURL=NetworkMap.js.map