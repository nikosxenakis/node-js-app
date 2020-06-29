"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AccessDB_1 = require("./routes/AccessDB");
const InitRoute_1 = require("./routes/InitRoute");
const LightRoute_1 = require("./routes/LightRoute");
class App {
    constructor() {
        process.title = "node-js-app";
        this.express = express_1.default();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express_1.default.Router();
        router.get("/access_db", AccessDB_1.accessDB);
        this.express.use("/access_db", router);
        router.get("/", InitRoute_1.initRoute);
        this.express.use("/", router);
        router.get("/lights", LightRoute_1.lightRoute);
        this.express.use("/lights", router);
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