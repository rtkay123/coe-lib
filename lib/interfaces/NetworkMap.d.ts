export declare class Rule {
    id: string;
    cfg: string;
    host: string;
    typologies: Array<Typology>;
    getStrValue(): string;
}
export declare class Typology {
    id: string;
    host: string;
    cfg: string;
    desc: string;
    rules: Array<Rule>;
    constructor(typology_id: string, cfg: string, host: string);
}
export declare class Channel {
    id: string;
    host: string;
    cfg: string;
    typologies: Array<Typology>;
}
export declare class Message {
    id: string;
    host: string;
    cfg: string;
    txTp: string;
    channels: Array<Channel>;
}
export declare class NetworkMap {
    active: boolean;
    cfg: string;
    messages: Array<Message>;
}
