"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
class Logger {
    static info(msg) {
        Logger.logger.info(msg);
    }
}
exports.Logger = Logger;
Logger.logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "combined.log" })
    ]
});
//# sourceMappingURL=Logger.js.map