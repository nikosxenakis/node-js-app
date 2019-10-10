import express from "express";
import sqlite3 from "sqlite3";
import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "combined.log" })
  ]
});

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      logger.info(`get`);
      const dbRes = this.access_db();

      res.json({
        message: "Hello World!",
        message2: dbRes
      });
    });

    this.express.use("/", router);
  }

  private access_db(): string {

    const db = new sqlite3.Database("./resources/database.db");
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
