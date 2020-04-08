const sqlite3 = require('sqlite3').verbose();
 
// open database in memory
let db = new sqlite3.Database('ScholarshipSystem.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

let sql = `SELECT Name name FROM Scholarship
ORDER BY name`;

db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    //console.log("read department");
    rows.forEach((row) => {
        console.log(row.name);
      });
});


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});