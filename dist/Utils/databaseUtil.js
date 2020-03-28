"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const Logger_1 = require("./Logger");
class DatabaseUtil {
    static access_db() {
        const db = new sqlite3_1.default.Database("./resources/database.db");
        let res = null;
        const sql = "SELECT * FROM sqlite_sequence";
        db.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                res = row.name + " " + row.seq + "\n";
                Logger_1.Logger.info(res);
            });
        });
        db.close();
        return res;
    }
}
exports.DatabaseUtil = DatabaseUtil;
//# sourceMappingURL=databaseUtil.js.map