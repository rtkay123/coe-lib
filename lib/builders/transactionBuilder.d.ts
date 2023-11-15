import { type DBConfig, type DatabaseManagerType } from '../services/dbManager';
export declare function transactionBuilder(manager: DatabaseManagerType, transactionHistoryConfig: DBConfig, redis: boolean): Promise<void>;
