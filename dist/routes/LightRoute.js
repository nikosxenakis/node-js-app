"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LifxAPIService_1 = require("../services/LifxAPIService");
const Logger_1 = require("../utils/Logger");
const lifxAPIService = new LifxAPIService_1.LifxAPIService("c8dbae8dc120496d31bb6851412867c8eb82bdac5e318eb864b8d1eb4c6101d4");
exports.lightRoute = (req, res) => {
    let color = req.query.color;
    Logger_1.Logger.info("get: /light in color = " + color);
    if (color == undefined)
        color = "white";
    lifxAPIService.setColor(color);
    res.json({
        message: "Init page"
    });
};
// curl "https://api.lifx.com/v1/lights/all" \ -H "Authorization: Bearer YOUR_APP_TOKEN"
//# sourceMappingURL=LightRoute.js.map