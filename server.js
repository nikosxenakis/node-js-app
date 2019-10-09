const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.get('/', (req, res) => {
  access_db();
  // res.send(res);
  res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

function access_db() {

  let db = new sqlite3.Database('./resources/database.db');
  let res = null;
  let sql = 'SELECT * FROM sqlite_sequence';

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      res = row.name + " " + row.seq + "\n";
      console.log(res);
    });
  });

  db.close();
  return res;
};
