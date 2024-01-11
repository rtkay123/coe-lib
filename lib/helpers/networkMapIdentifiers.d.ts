import { type DatabaseManagerInstance, type ManagerConfig } from '..';
export declare const getIdsFromNetworkMap: (databaseManager: DatabaseManagerInstance<ManagerConfig>) => Promise<{
    rulesIds: string[];
    typologyCfg: string[];
}>;
export declare const getRoutesFromNetworkMap: (databaseManager: DatabaseManagerInstance<ManagerConfig>, processor: string) => Promise<{
    consumers: string[];
}>;
