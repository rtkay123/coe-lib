import { type DatabaseManagerType, type DBConfig } from '../services/dbManager';
export declare function configurationBuilder(manager: DatabaseManagerType, configurationConfig: DBConfig): Promise<void>;
