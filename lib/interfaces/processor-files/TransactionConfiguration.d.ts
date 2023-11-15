export declare class Typology {
    id: string;
    cfg: string;
    threshold: number;
}
export declare class Channel {
    id: string;
    cfg: string;
    typologies: Typology[];
}
export declare class TransactionConfiguration {
    id: string;
    cfg: string;
    txTp: string;
    channels: Channel[];
}
