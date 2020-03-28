import sqlite3 from "sqlite3";
import { Logger } from "./Logger";

export class DatabaseUtil {

    public static access_db(): string {

        const db = new sqlite3.Database("./resources/database.db");
        let res = null;
        const sql = "SELECT * FROM sqlite_sequence";

        db.all(sql, [], (err, rows) => {
          if (err) {
            throw err;
          }
          rows.forEach((row) => {
            res = row.name + " " + row.seq + "\n";
            Logger.info(res);
          });
        });

        db.close();
        return res;
      }
}
