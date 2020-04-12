const sqlite3 = require("sqlite3").verbose();

// open database in memory
let db = new sqlite3.Database("../ScholarshipSystem.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

let sql = `SELECT s.SchID, s.Name name --s.*
          , s.Description description
          , d.DepartmentCode departmentCode
          , s.AwardValue awardValue, s.Deadline deadline
          , c.Value as "StudentType"
          , b.Value as "YearEntering" 
          FROM Scholarship s
            LEFT JOIN ScholarshipDepartment d on s.SchID=d.SchID
            LEFT JOIN (SELECT  SchID, value FROM ScholarshipCriteria WHERE CriteriaName='StudentType') c on s.SchID=c.SchID
            LEFT JOIN ScholarshipYearEntering b on s.SchID=b.SchID`;
// Initialize 2d array for scholarships
var scholarships = [];

db.each(sql, [], (err, row) => {
  if (err) {
    throw err;
  }

  var array = new Array(
    `${row.name}`,
    `${row.description}`,
    `${row.departmentCode}`,
    `${row.awardValue}`,
    `${row.deadline}`,
    `${row.StudentType}`,
    `${row.YearEntering}`
  );
  // Add row array to 2d array
  scholarships.push(array);
  console.log(scholarships);
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
