"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumberjackService = void 0;
const tslib_1 = require("tslib");
const grpc = tslib_1.__importStar(require("@grpc/grpc-js"));
const protoLoader = tslib_1.__importStar(require("@grpc/proto-loader"));
const PROTO_PATH = 'proto/message.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logProto = grpc.loadPackageDefinition(packageDefinition).message;
class LumberjackService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    #client;
    constructor(host) {
        this.#client = new logProto.Lumberjack(host, grpc.credentials.createInsecure());
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    log(object, callback) {
        this.#client.send(object, callback);
    }
}
exports.LumberjackService = LumberjackService;
//# sourceMappingURL=lumberjack.js.map