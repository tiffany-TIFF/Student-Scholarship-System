getScholarships();
// request scholarships from server
function getScholarships() {
  $.get("/ScholarshipSystem", function (data) {
    if (!data) {
      console.log("No data received");
    }
    console.log("Received data:");
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
    showScholarships(data);
  });
}

// Show scholarships in a table on the page
function showScholarships(scholarships) {
  var tableRef = document.getElementById("sTable");
  for (var i = 0; i < scholarships.length; i++) {
    // insert a row
    var newRow = tableRef.insertRow();

    // insert a cell in the row
    var newCell = newRow.insertCell(0);

    // append a text node to the cell
    var newText = document.createTextNode(scholarships[i].name);
    newCell.appendChild(newText);

  }
}
/*const sqlite3 = require("sqlite3").verbose();

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
*/