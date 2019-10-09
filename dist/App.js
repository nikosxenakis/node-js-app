"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sqlite3_1 = __importDefault(require("sqlite3"));
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "combined.log" })
    ]
});
class App {
    constructor() {
        this.express = express_1.default();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express_1.default.Router();
        router.get("/", (req, res) => {
            logger.info(`get`);
            this.access_db();
            res.json({
                message: "Hello World!"
            });
        });
        this.express.use("/", router);
    }
    access_db() {
        const db = new sqlite3_1.default.Database("./resources/database.db");
        let res = null;
        const sql = "SELECT * FROM sqlite_sequence";
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                res = row.name + " " + row.seq + "\n";
                logger.info(res);
            });
        });
        db.close();
        return res;
    }
}
exports.default = new App().express;
// const express = require('express');
// const app = express();
// const sqlite3 = require('sqlite3').verbose();
// app.get('/', (req, res) => {
//   access_db();
//   // res.send(res);
//   res.send('Hello from App Engine!');
// });
// // Listen to the App Engine-specified port, or 8080 otherwise
// const PORT = process.env.PORT || 8080;
// server = app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}...`);
// });
// module.exports = server;
//# sourceMappingURL=App.js.map