import { type Database } from 'arangojs';
export declare function isDatabaseReady(db: Database | undefined): Promise<boolean>;
