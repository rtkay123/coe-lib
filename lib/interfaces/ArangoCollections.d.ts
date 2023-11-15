declare const dbTransactions: Readonly<{
    pacs008: string;
    pacs002: string;
    pain001: string;
    transactions: string;
}>;
declare const dbPseudonyms: Readonly<{
    self: string;
    accounts: string;
    account_holder: string;
    entities: string;
    transactionRelationship: string;
}>;
declare const dbConfiguration: Readonly<{
    self: string;
    typologyExpression: string;
    transactionConfiguration: string;
}>;
declare const dbNetworkMap: Readonly<{
    netConfig: string;
}>;
export { dbTransactions, dbPseudonyms, dbConfiguration, dbNetworkMap };
