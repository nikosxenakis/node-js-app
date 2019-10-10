"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const App_1 = __importDefault(require("./App"));
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "combined.log" })
    ]
});
// export default logger;
const port = process.env.PORT || 3000;
const server = App_1.default.listen(port, () => {
    //   if (err) {
    // return console.log(err);
    //   }
    // logger.info('server is listening on ${port}');
    logger.info(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map