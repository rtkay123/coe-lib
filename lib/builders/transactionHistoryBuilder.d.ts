import { type DatabaseManagerType, type DBConfig } from '../services/dbManager';
export declare function transactionHistoryBuilder(manager: DatabaseManagerType, transactionHistoryConfig: DBConfig, redis: boolean): Promise<void>;
