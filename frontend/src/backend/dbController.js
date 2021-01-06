var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

let db = new sqlite3.Database('./db/basedato.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the chinook database.');
});

const dataSql = fs.readFileSync('./db/init.sql').toString();

const dataArr = dataSql.toString().split(';');
db.serialize(() => {
  db.run('PRAGMA foreign_keys=OFF;');
  db.run('BEGIN TRANSACTION;');
  dataArr.forEach((query) => {
    if(query) {
      query = query.trim() + ';';
      db.run(query, (err) => {
         if(err) throw err;
      });
    }
  });
  db.run('COMMIT;');
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});