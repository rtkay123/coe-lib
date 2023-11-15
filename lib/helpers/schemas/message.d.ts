export declare const messageSchema: {
    title: string;
    type: string;
    definitions: {
        ruleResult: {
            type: string;
            properties: {
                id: {
                    type: string;
                };
                cfg: {
                    type: string;
                };
                subRuleRef: {
                    type: string;
                };
                result: {
                    type: string;
                };
                reason: {
                    type: string;
                };
                wght: {
                    type: string;
                };
                desc: {
                    type: string;
                };
                prcgTm: {
                    type: string;
                };
            };
            required: string[];
        };
        typologyResult: {
            type: string;
            properties: {
                id: {
                    type: string;
                };
                cfg: {
                    type: string;
                };
                desc: {
                    type: string;
                };
                result: {
                    type: string;
                };
                threshold: {
                    type: string;
                };
                ruleResults: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                prcgTm: {
                    type: string;
                };
                review: {
                    type: string;
                };
            };
            required: string[];
        };
        channelResult: {
            type: string;
            properties: {
                prcgTm: {
                    type: string;
                };
                result: {
                    type: string;
                };
                cfg: {
                    type: string;
                };
                id: {
                    type: string;
                };
                status: {
                    type: string;
                };
                typologyResult: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
            required: string[];
        };
        tadpResult: {
            type: string;
            properties: {
                cfg: {
                    type: string;
                };
                channelResult: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
                id: {
                    type: string;
                };
                prcgTm: {
                    type: string;
                };
            };
            required: string[];
        };
        metaData: {
            type: string;
            patternProperties: {
                '^.*$': {
                    anyOf: {
                        type: string;
                    }[];
                };
            };
            additionalProperties: boolean;
            required: never[];
        };
    };
    properties: {
        networkMap: {
            type: string;
            properties: {
                active: {
                    type: string;
                };
                cfg: {
                    type: string;
                };
                messages: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            id: {
                                type: string;
                            };
                            host: {
                                type: string;
                            };
                            cfg: {
                                type: string;
                            };
                            txTp: {
                                type: string;
                            };
                            channels: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        id: {
                                            type: string;
                                        };
                                        host: {
                                            type: string;
                                        };
                                        cfg: {
                                            type: string;
                                        };
                                        typologies: {
                                            type: string;
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    host: {
                                                        type: string;
                                                    };
                                                    cfg: {
                                                        type: string;
                                                    };
                                                    rules: {
                                                        type: string;
                                                        items: {
                                                            type: string;
                                                            properties: {
                                                                id: {
                                                                    type: string;
                                                                };
                                                                host: {
                                                                    type: string;
                                                                };
                                                                cfg: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                        required: string[];
                    };
                };
            };
            required: string[];
        };
        DataCache: {
            type: string;
            properties: {
                cdtrId: {
                    type: string;
                };
                dbtrId: {
                    type: string;
                };
                cdtrAcctId: {
                    type: string;
                };
                dbtrAcctId: {
                    type: string;
                };
            };
            required: string[];
        };
        metaData: {
            $ref: string;
        };
        ruleResult: {
            $ref: string;
        };
        typologyResult: {
            $ref: string;
        };
        channelResult: {
            $ref: string;
        };
        tadpResult: {
            $ref: string;
        };
        transaction: {
            type: string;
            properties: {};
            if: {
                type: string;
                properties: {
                    TxTp: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            then: {
                type: string;
                properties: {
                    TxTp: {
                        type: string;
                        enum: string[];
                    };
                    CstmrCdtTrfInitn: {
                        type: string;
                        properties: {
                            GrpHdr: {
                                type: string;
                                properties: {
                                    MsgId: {
                                        type: string;
                                    };
                                    CreDtTm: {
                                        type: string;
                                    };
                                    NbOfTxs: {
                                        type: string;
                                    };
                                    InitgPty: {
                                        type: string;
                                        properties: {
                                            Nm: {
                                                type: string;
                                            };
                                            Id: {
                                                type: string;
                                                properties: {
                                                    PrvtId: {
                                                        type: string;
                                                        properties: {
                                                            DtAndPlcOfBirth: {
                                                                type: string;
                                                                properties: {
                                                                    BirthDt: {
                                                                        type: string;
                                                                    };
                                                                    CityOfBirth: {
                                                                        type: string;
                                                                    };
                                                                    CtryOfBirth: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                            Othr: {
                                                                type: string;
                                                                properties: {
                                                                    Id: {
                                                                        type: string;
                                                                    };
                                                                    SchmeNm: {
                                                                        type: string;
                                                                        properties: {
                                                                            Prtry: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            CtctDtls: {
                                                type: string;
                                                properties: {
                                                    MobNb: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                required: string[];
                            };
                            PmtInf: {
                                type: string;
                                properties: {
                                    PmtInfId: {
                                        type: string;
                                    };
                                    PmtMtd: {
                                        type: string;
                                    };
                                    ReqdAdvcTp: {
                                        type: string;
                                        properties: {
                                            DbtAdvc: {
                                                type: string;
                                                properties: {
                                                    Cd: {
                                                        type: string;
                                                    };
                                                    Prtry: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    ReqdExctnDt: {
                                        type: string;
                                        properties: {
                                            Dt: {
                                                type: string;
                                            };
                                            DtTm: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                    Dbtr: {
                                        type: string;
                                        properties: {
                                            Nm: {
                                                type: string;
                                            };
                                            Id: {
                                                type: string;
                                                properties: {
                                                    PrvtId: {
                                                        type: string;
                                                        properties: {
                                                            DtAndPlcOfBirth: {
                                                                type: string;
                                                                properties: {
                                                                    BirthDt: {
                                                                        type: string;
                                                                    };
                                                                    CityOfBirth: {
                                                                        type: string;
                                                                    };
                                                                    CtryOfBirth: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                            Othr: {
                                                                type: string;
                                                                properties: {
                                                                    Id: {
                                                                        type: string;
                                                                    };
                                                                    SchmeNm: {
                                                                        type: string;
                                                                        properties: {
                                                                            Prtry: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            CtctDtls: {
                                                type: string;
                                                properties: {
                                                    MobNb: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    DbtrAcct: {
                                        type: string;
                                        properties: {
                                            Id: {
                                                type: string;
                                                properties: {
                                                    Othr: {
                                                        type: string;
                                                        properties: {
                                                            Id: {
                                                                type: string;
                                                            };
                                                            SchmeNm: {
                                                                type: string;
                                                                properties: {
                                                                    Prtry: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Nm: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                    DbtrAgt: {
                                        type: string;
                                        properties: {
                                            FinInstnId: {
                                                type: string;
                                                properties: {
                                                    ClrSysMmbId: {
                                                        type: string;
                                                        properties: {
                                                            MmbId: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    CdtTrfTxInf: {
                                        type: string;
                                        properties: {
                                            PmtId: {
                                                type: string;
                                                properties: {
                                                    EndToEndId: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            PmtTpInf: {
                                                type: string;
                                                properties: {
                                                    CtgyPurp: {
                                                        type: string;
                                                        properties: {
                                                            Prtry: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Amt: {
                                                type: string;
                                                properties: {
                                                    InstdAmt: {
                                                        type: string;
                                                        properties: {
                                                            Amt: {
                                                                type: string;
                                                                properties: {
                                                                    Amt: {
                                                                        type: string;
                                                                    };
                                                                    Ccy: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    EqvtAmt: {
                                                        type: string;
                                                        properties: {
                                                            Amt: {
                                                                type: string;
                                                                properties: {
                                                                    Amt: {
                                                                        type: string;
                                                                    };
                                                                    Ccy: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                            CcyOfTrf: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            ChrgBr: {
                                                type: string;
                                            };
                                            CdtrAgt: {
                                                type: string;
                                                properties: {
                                                    FinInstnId: {
                                                        type: string;
                                                        properties: {
                                                            ClrSysMmbId: {
                                                                type: string;
                                                                properties: {
                                                                    MmbId: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Cdtr: {
                                                type: string;
                                                properties: {
                                                    Nm: {
                                                        type: string;
                                                    };
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            PrvtId: {
                                                                type: string;
                                                                properties: {
                                                                    DtAndPlcOfBirth: {
                                                                        type: string;
                                                                        properties: {
                                                                            BirthDt: {
                                                                                type: string;
                                                                            };
                                                                            CityOfBirth: {
                                                                                type: string;
                                                                            };
                                                                            CtryOfBirth: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Othr: {
                                                                        type: string;
                                                                        properties: {
                                                                            Id: {
                                                                                type: string;
                                                                            };
                                                                            SchmeNm: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Prtry: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    CtctDtls: {
                                                        type: string;
                                                        properties: {
                                                            MobNb: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            CdtrAcct: {
                                                type: string;
                                                properties: {
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            Othr: {
                                                                type: string;
                                                                properties: {
                                                                    Id: {
                                                                        type: string;
                                                                    };
                                                                    SchmeNm: {
                                                                        type: string;
                                                                        properties: {
                                                                            Prtry: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Nm: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Purp: {
                                                type: string;
                                                properties: {
                                                    Cd: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            RgltryRptg: {
                                                type: string;
                                                properties: {
                                                    Dtls: {
                                                        type: string;
                                                        properties: {
                                                            Tp: {
                                                                type: string;
                                                            };
                                                            Cd: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            RmtInf: {
                                                type: string;
                                                properties: {
                                                    Ustrd: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            SplmtryData: {
                                                type: string;
                                                properties: {
                                                    Envlp: {
                                                        type: string;
                                                        properties: {
                                                            Doc: {
                                                                type: string;
                                                                properties: {
                                                                    Dbtr: {
                                                                        type: string;
                                                                        properties: {
                                                                            FrstNm: {
                                                                                type: string;
                                                                            };
                                                                            MddlNm: {
                                                                                type: string;
                                                                            };
                                                                            LastNm: {
                                                                                type: string;
                                                                            };
                                                                            MrchntClssfctnCd: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Cdtr: {
                                                                        type: string;
                                                                        properties: {
                                                                            FrstNm: {
                                                                                type: string;
                                                                            };
                                                                            MddlNm: {
                                                                                type: string;
                                                                            };
                                                                            LastNm: {
                                                                                type: string;
                                                                            };
                                                                            MrchntClssfctnCd: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    DbtrFinSvcsPrvdrFees: {
                                                                        type: string;
                                                                        properties: {
                                                                            Ccy: {
                                                                                type: string;
                                                                            };
                                                                            Amt: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Xprtn: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                required: string[];
                            };
                            SplmtryData: {
                                type: string;
                                properties: {
                                    Envlp: {
                                        type: string;
                                        properties: {
                                            Doc: {
                                                type: string;
                                                properties: {
                                                    InitgPty: {
                                                        type: string;
                                                        properties: {
                                                            InitrTp: {
                                                                type: string;
                                                            };
                                                            Glctn: {
                                                                type: string;
                                                                properties: {
                                                                    Lat: {
                                                                        type: string;
                                                                    };
                                                                    Long: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                required: string[];
                            };
                        };
                        required: string[];
                    };
                };
            };
            else: {
                properties: {};
                if: {
                    type: string;
                    properties: {
                        TxTp: {
                            type: string;
                            enum: string[];
                        };
                    };
                };
                then: {
                    type: string;
                    properties: {
                        TxTp: {
                            type: string;
                            enum: string[];
                        };
                        FIToFIPmtSts: {
                            type: string;
                            properties: {
                                GrpHdr: {
                                    type: string;
                                    properties: {
                                        MsgId: {
                                            type: string;
                                        };
                                        CreDtTm: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                                TxInfAndSts: {
                                    type: string;
                                    properties: {
                                        OrgnlInstrId: {
                                            type: string;
                                        };
                                        OrgnlEndToEndId: {
                                            type: string;
                                        };
                                        TxSts: {
                                            type: string;
                                        };
                                        ChrgsInf: {
                                            type: string;
                                            items: {
                                                type: string;
                                                properties: {
                                                    Amt: {
                                                        type: string;
                                                        properties: {
                                                            Amt: {
                                                                type: string;
                                                            };
                                                            Ccy: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Agt: {
                                                        type: string;
                                                        properties: {
                                                            FinInstnId: {
                                                                type: string;
                                                                properties: {
                                                                    ClrSysMmbId: {
                                                                        type: string;
                                                                        properties: {
                                                                            MmbId: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        AccptncDtTm: {
                                            type: string;
                                        };
                                        InstgAgt: {
                                            type: string;
                                            properties: {
                                                FinInstnId: {
                                                    type: string;
                                                    properties: {
                                                        ClrSysMmbId: {
                                                            type: string;
                                                            properties: {
                                                                MmbId: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                        InstdAgt: {
                                            type: string;
                                            properties: {
                                                FinInstnId: {
                                                    type: string;
                                                    properties: {
                                                        ClrSysMmbId: {
                                                            type: string;
                                                            properties: {
                                                                MmbId: {
                                                                    type: string;
                                                                };
                                                            };
                                                            required: string[];
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                            required: string[];
                        };
                    };
                };
                else: {
                    type: string;
                    properties: {};
                    if: {
                        type: string;
                        properties: {
                            TxTp: {
                                type: string;
                                enum: string[];
                            };
                        };
                    };
                    then: {
                        type: string;
                        properties: {
                            TxTp: {
                                type: string;
                                enum: string[];
                            };
                            FIToFICstmrCdt: {
                                type: string;
                                properties: {
                                    GrpHdr: {
                                        type: string;
                                        properties: {
                                            MsgId: {
                                                type: string;
                                            };
                                            CreDtTm: {
                                                type: string;
                                            };
                                            NbOfTxs: {
                                                type: string;
                                            };
                                            SttlmInf: {
                                                type: string;
                                                properties: {
                                                    SttlmMtd: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    CdtTrfTxInf: {
                                        type: string;
                                        properties: {
                                            PmtId: {
                                                type: string;
                                                properties: {
                                                    InstrId: {
                                                        type: string;
                                                    };
                                                    EndToEndId: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            IntrBkSttlmAmt: {
                                                type: string;
                                                properties: {
                                                    Amt: {
                                                        type: string;
                                                        properties: {
                                                            Amt: {
                                                                type: string;
                                                            };
                                                            Ccy: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            InstdAmt: {
                                                type: string;
                                                properties: {
                                                    Amt: {
                                                        type: string;
                                                        properties: {
                                                            Amt: {
                                                                type: string;
                                                            };
                                                            Ccy: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            ChrgBr: {
                                                type: string;
                                            };
                                            ChrgsInf: {
                                                type: string;
                                                properties: {
                                                    Amt: {
                                                        type: string;
                                                        properties: {
                                                            Amt: {
                                                                type: string;
                                                            };
                                                            Ccy: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Agt: {
                                                        type: string;
                                                        properties: {
                                                            FinInstnId: {
                                                                type: string;
                                                                properties: {
                                                                    ClrSysMmbId: {
                                                                        type: string;
                                                                        properties: {
                                                                            MmbId: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            InitgPty: {
                                                type: string;
                                                properties: {
                                                    Nm: {
                                                        type: string;
                                                    };
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            PrvtId: {
                                                                type: string;
                                                                properties: {
                                                                    DtAndPlcOfBirth: {
                                                                        type: string;
                                                                        properties: {
                                                                            BirthDt: {
                                                                                type: string;
                                                                            };
                                                                            CityOfBirth: {
                                                                                type: string;
                                                                            };
                                                                            CtryOfBirth: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Othr: {
                                                                        type: string;
                                                                        properties: {
                                                                            Id: {
                                                                                type: string;
                                                                            };
                                                                            SchmeNm: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Prtry: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    CtctDtls: {
                                                        type: string;
                                                        properties: {
                                                            MobNb: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Dbtr: {
                                                type: string;
                                                properties: {
                                                    Nm: {
                                                        type: string;
                                                    };
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            PrvtId: {
                                                                type: string;
                                                                properties: {
                                                                    DtAndPlcOfBirth: {
                                                                        type: string;
                                                                        properties: {
                                                                            BirthDt: {
                                                                                type: string;
                                                                            };
                                                                            CityOfBirth: {
                                                                                type: string;
                                                                            };
                                                                            CtryOfBirth: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Othr: {
                                                                        type: string;
                                                                        properties: {
                                                                            Id: {
                                                                                type: string;
                                                                            };
                                                                            SchmeNm: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Prtry: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    CtctDtls: {
                                                        type: string;
                                                        properties: {
                                                            MobNb: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            DbtrAcct: {
                                                type: string;
                                                properties: {
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            Othr: {
                                                                type: string;
                                                                properties: {
                                                                    Id: {
                                                                        type: string;
                                                                    };
                                                                    SchmeNm: {
                                                                        type: string;
                                                                        properties: {
                                                                            Prtry: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Nm: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            DbtrAgt: {
                                                type: string;
                                                properties: {
                                                    FinInstnId: {
                                                        type: string;
                                                        properties: {
                                                            ClrSysMmbId: {
                                                                type: string;
                                                                properties: {
                                                                    MmbId: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            CdtrAgt: {
                                                type: string;
                                                properties: {
                                                    FinInstnId: {
                                                        type: string;
                                                        properties: {
                                                            ClrSysMmbId: {
                                                                type: string;
                                                                properties: {
                                                                    MmbId: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Cdtr: {
                                                type: string;
                                                properties: {
                                                    Nm: {
                                                        type: string;
                                                    };
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            PrvtId: {
                                                                type: string;
                                                                properties: {
                                                                    DtAndPlcOfBirth: {
                                                                        type: string;
                                                                        properties: {
                                                                            BirthDt: {
                                                                                type: string;
                                                                            };
                                                                            CityOfBirth: {
                                                                                type: string;
                                                                            };
                                                                            CtryOfBirth: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Othr: {
                                                                        type: string;
                                                                        properties: {
                                                                            Id: {
                                                                                type: string;
                                                                            };
                                                                            SchmeNm: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Prtry: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    CtctDtls: {
                                                        type: string;
                                                        properties: {
                                                            MobNb: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            CdtrAcct: {
                                                type: string;
                                                properties: {
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            Othr: {
                                                                type: string;
                                                                properties: {
                                                                    Id: {
                                                                        type: string;
                                                                    };
                                                                    SchmeNm: {
                                                                        type: string;
                                                                        properties: {
                                                                            Prtry: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Nm: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Purp: {
                                                type: string;
                                                properties: {
                                                    Cd: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    RgltryRptg: {
                                        type: string;
                                        properties: {
                                            Dtls: {
                                                type: string;
                                                properties: {
                                                    Tp: {
                                                        type: string;
                                                    };
                                                    Cd: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    RmtInf: {
                                        type: string;
                                        properties: {
                                            Ustrd: {
                                                type: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                    SplmtryData: {
                                        type: string;
                                        properties: {
                                            Envlp: {
                                                type: string;
                                                properties: {
                                                    Doc: {
                                                        type: string;
                                                        properties: {
                                                            Xprtn: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                    else: {
                        type: string;
                        properties: {
                            TxTp: {
                                type: string;
                            };
                            CdtrPmtActvtnReq: {
                                type: string;
                                properties: {
                                    GrpHdr: {
                                        type: string;
                                        properties: {
                                            MsgId: {
                                                type: string;
                                            };
                                            CreDtTm: {
                                                type: string;
                                            };
                                            NbOfTxs: {
                                                type: string;
                                            };
                                            InitgPty: {
                                                type: string;
                                                properties: {
                                                    Nm: {
                                                        type: string;
                                                    };
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            PrvtId: {
                                                                type: string;
                                                                properties: {
                                                                    DtAndPlcOfBirth: {
                                                                        type: string;
                                                                        properties: {
                                                                            BirthDt: {
                                                                                type: string;
                                                                            };
                                                                            CityOfBirth: {
                                                                                type: string;
                                                                            };
                                                                            CtryOfBirth: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Othr: {
                                                                        type: string;
                                                                        properties: {
                                                                            Id: {
                                                                                type: string;
                                                                            };
                                                                            SchmeNm: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Prtry: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    CtctDtls: {
                                                        type: string;
                                                        properties: {
                                                            MobNb: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    PmtInf: {
                                        type: string;
                                        properties: {
                                            PmtInfId: {
                                                type: string;
                                            };
                                            PmtMtd: {
                                                type: string;
                                            };
                                            ReqdAdvcTp: {
                                                type: string;
                                                properties: {
                                                    DbtAdvc: {
                                                        type: string;
                                                        properties: {
                                                            Cd: {
                                                                type: string;
                                                            };
                                                            Prtry: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            ReqdExctnDt: {
                                                type: string;
                                                properties: {
                                                    DtTm: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            XpryDt: {
                                                type: string;
                                                properties: {
                                                    DtTm: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            Dbtr: {
                                                type: string;
                                                properties: {
                                                    Nm: {
                                                        type: string;
                                                    };
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            PrvtId: {
                                                                type: string;
                                                                properties: {
                                                                    DtAndPlcOfBirth: {
                                                                        type: string;
                                                                        properties: {
                                                                            BirthDt: {
                                                                                type: string;
                                                                            };
                                                                            CityOfBirth: {
                                                                                type: string;
                                                                            };
                                                                            CtryOfBirth: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    Othr: {
                                                                        type: string;
                                                                        properties: {
                                                                            Id: {
                                                                                type: string;
                                                                            };
                                                                            SchmeNm: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Prtry: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    CtctDtls: {
                                                        type: string;
                                                        properties: {
                                                            MobNb: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            DbtrAcct: {
                                                type: string;
                                                properties: {
                                                    Id: {
                                                        type: string;
                                                        properties: {
                                                            Othr: {
                                                                type: string;
                                                                properties: {
                                                                    Id: {
                                                                        type: string;
                                                                    };
                                                                    SchmeNm: {
                                                                        type: string;
                                                                        properties: {
                                                                            Prtry: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Nm: {
                                                        type: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                            DbtrAgt: {
                                                type: string;
                                                properties: {
                                                    FinInstnId: {
                                                        type: string;
                                                        properties: {
                                                            ClrSysMmbId: {
                                                                type: string;
                                                                properties: {
                                                                    MmbId: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                            CdtTrfTxInf: {
                                                type: string;
                                                properties: {
                                                    PmtId: {
                                                        type: string;
                                                        properties: {
                                                            EndToEndId: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    PmtTpInf: {
                                                        type: string;
                                                        properties: {
                                                            CtgyPurp: {
                                                                type: string;
                                                                properties: {
                                                                    Prtry: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Amt: {
                                                        type: string;
                                                        properties: {
                                                            InstdAmt: {
                                                                type: string;
                                                                properties: {
                                                                    Amt: {
                                                                        type: string;
                                                                        properties: {
                                                                            Amt: {
                                                                                type: string;
                                                                            };
                                                                            Ccy: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                            EqvtAmt: {
                                                                type: string;
                                                                properties: {
                                                                    Amt: {
                                                                        type: string;
                                                                        properties: {
                                                                            Amt: {
                                                                                type: string;
                                                                            };
                                                                            Ccy: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                    CcyOfTrf: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    ChrgBr: {
                                                        type: string;
                                                    };
                                                    CdtrAgt: {
                                                        type: string;
                                                        properties: {
                                                            FinInstnId: {
                                                                type: string;
                                                                properties: {
                                                                    ClrSysMmbId: {
                                                                        type: string;
                                                                        properties: {
                                                                            MmbId: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Cdtr: {
                                                        type: string;
                                                        properties: {
                                                            Nm: {
                                                                type: string;
                                                            };
                                                            Id: {
                                                                type: string;
                                                                properties: {
                                                                    PrvtId: {
                                                                        type: string;
                                                                        properties: {
                                                                            DtAndPlcOfBirth: {
                                                                                type: string;
                                                                                properties: {
                                                                                    BirthDt: {
                                                                                        type: string;
                                                                                    };
                                                                                    CityOfBirth: {
                                                                                        type: string;
                                                                                    };
                                                                                    CtryOfBirth: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                            Othr: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Id: {
                                                                                        type: string;
                                                                                    };
                                                                                    SchmeNm: {
                                                                                        type: string;
                                                                                        properties: {
                                                                                            Prtry: {
                                                                                                type: string;
                                                                                            };
                                                                                        };
                                                                                        required: string[];
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                            CtctDtls: {
                                                                type: string;
                                                                properties: {
                                                                    MobNb: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    CdtrAcct: {
                                                        type: string;
                                                        properties: {
                                                            Id: {
                                                                type: string;
                                                                properties: {
                                                                    Othr: {
                                                                        type: string;
                                                                        properties: {
                                                                            Id: {
                                                                                type: string;
                                                                            };
                                                                            SchmeNm: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Prtry: {
                                                                                        type: string;
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                            Nm: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    Purp: {
                                                        type: string;
                                                        properties: {
                                                            Cd: {
                                                                type: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    RgltryRptg: {
                                                        type: string;
                                                        properties: {
                                                            Dtls: {
                                                                type: string;
                                                                properties: {
                                                                    Tp: {
                                                                        type: string;
                                                                    };
                                                                    Cd: {
                                                                        type: string;
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                    SplmtryData: {
                                                        type: string;
                                                        properties: {
                                                            Envlp: {
                                                                type: string;
                                                                properties: {
                                                                    Doc: {
                                                                        type: string;
                                                                        properties: {
                                                                            PyeeRcvAmt: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Amt: {
                                                                                        type: string;
                                                                                        properties: {
                                                                                            Amt: {
                                                                                                type: string;
                                                                                            };
                                                                                            Ccy: {
                                                                                                type: string;
                                                                                            };
                                                                                        };
                                                                                        required: string[];
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                            PyeeFinSvcsPrvdrFee: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Amt: {
                                                                                        type: string;
                                                                                        properties: {
                                                                                            Amt: {
                                                                                                type: string;
                                                                                            };
                                                                                            Ccy: {
                                                                                                type: string;
                                                                                            };
                                                                                        };
                                                                                        required: string[];
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                            PyeeFinSvcsPrvdrComssn: {
                                                                                type: string;
                                                                                properties: {
                                                                                    Amt: {
                                                                                        type: string;
                                                                                        properties: {
                                                                                            Amt: {
                                                                                                type: string;
                                                                                            };
                                                                                            Ccy: {
                                                                                                type: string;
                                                                                            };
                                                                                        };
                                                                                        required: string[];
                                                                                    };
                                                                                };
                                                                                required: string[];
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                    SplmtryData: {
                                        type: string;
                                        properties: {
                                            Envlp: {
                                                type: string;
                                                properties: {
                                                    Doc: {
                                                        type: string;
                                                        properties: {
                                                            InitgPty: {
                                                                type: string;
                                                                properties: {
                                                                    Glctn: {
                                                                        type: string;
                                                                        properties: {
                                                                            Lat: {
                                                                                type: string;
                                                                            };
                                                                            Long: {
                                                                                type: string;
                                                                            };
                                                                        };
                                                                        required: string[];
                                                                    };
                                                                };
                                                                required: string[];
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
            };
            required: never[];
        };
        report: {
            type: string;
            properties: {
                evaluationID: {
                    type: string;
                };
                metaData: {
                    $ref: string;
                };
                status: {
                    type: string;
                };
                timestamp: {
                    type: string;
                };
                tadpResult: {
                    $ref: string;
                };
            };
            required: string[];
        };
    };
    required: string[];
};
export declare const messageSchemaInstant: <TDoc = any>(doc: TDoc) => any;
