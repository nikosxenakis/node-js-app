"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseUtil_1 = require("../Utils/databaseUtil");
const Logger_1 = require("../Utils/Logger");
exports.accessDB = (req, res) => {
    Logger_1.Logger.info("get: /access_db");
    const dbRes = databaseUtil_1.DatabaseUtil.access_db();
    res.json({
        message: "Hello World!",
        message2: dbRes
    });
};
//# sourceMappingURL=AccessDB.js.map