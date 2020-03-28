"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseUtil_1 = require("../Utils/databaseUtil");
const Logger_1 = require("../Utils/Logger");
exports.initRoute = (req, res) => {
    Logger_1.Logger.info("get: /");
    const dbRes = databaseUtil_1.DatabaseUtil.access_db();
    res.json({
        message: "Init page"
    });
};
//# sourceMappingURL=InitRoute.js.map