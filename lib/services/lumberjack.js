"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LumberjackService = void 0;
const tslib_1 = require("tslib");
const grpc = tslib_1.__importStar(require("@grpc/grpc-js"));
const protoLoader = tslib_1.__importStar(require("@grpc/proto-loader"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
const PROTO_PATH = node_path_1.default.join(__dirname, '../helpers/proto/Lumberjack.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logProto = grpc.loadPackageDefinition(packageDefinition).lumberjack;
class LumberjackService {
    #client;
    #channel;
    constructor(host, channel) {
        this.#client = new logProto.Lumberjack(host, grpc.credentials.createInsecure());
        this.#channel = channel;
    }
    #makeMessage(message, level, serviceOperation) {
        return {
            message,
            level,
            channel: this.#channel,
            serviceOperation,
        };
    }
    log(message, level, serviceOperation, callback) {
        const object = this.#makeMessage(message, level, serviceOperation);
        if (callback) {
            this.#client.sendLog(object, callback);
        }
        else {
            this.#client.sendLog(object, () => {
                // no callback provided
            });
        }
    }
}
exports.LumberjackService = LumberjackService;
//# sourceMappingURL=lumberjack.js.map