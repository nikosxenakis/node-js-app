import express from "express";
import { accessDB } from "./routes/AccessDB";
import { initRoute } from "./routes/InitRoute";
import { lightRoute } from "./routes/LightRoute";

class App {
  public express: express.Application;

  constructor() {
    process.title = "node-js-app";
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get("/access_db", accessDB);
    this.express.use("/access_db", router);

    router.get("/", initRoute);
    this.express.use("/", router);

    router.get("/lights", lightRoute);
    this.express.use("/lights", router);

  }

}
export default new App().express;

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
