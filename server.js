// include modules
var express = require("express");
var app = express();
const sqlite3 = require("sqlite3").verbose();
var bodyParser = require('body-parser');

//open access to database
let db = new sqlite3.Database("db/ScholarshipSystem.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

// specify client-side files as static files
app.use(express.static(__dirname + "/public"));

// use body parser to handle url encoded data 
app.use(bodyParser.urlencoded({ extended: false }));

// routes for requests so they are sent to the right path on the server, and sends a response
// "/" means to get the root file, usually the index or the home page
app.get("/", function (request, response) {
  response.send("Hello, world");
});

app.get("/ScholarshipSystem", function (request, response) {
  console.log("GET request received at /ScholarshipSystem");
  let sql = `SELECT s.SchID, s.Name name --s.*
  , s.Description description
  , d.DepartmentCode departmentCode
  , s.AwardValue awardValue, s.Deadline deadline
  , c.Value as "StudentType"
  , b.Value as "YearEntering" 
  from Scholarship s
       LEFT JOIN ScholarshipDepartment d on s.SchID=d.SchID
       LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='StudentType') c on s.SchID=c.SchID
       LEFT JOIN ScholarshipYearEntering b on s.SchID=b.SchID`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("get");
      response.send(rows);
    }
  });
});

// client sends data to server, most commonly sent from a user submitting a form
app.post("/Scholarship", function (request, response) {
  console.log("POST request received at /Scholarship");
  db.run('INSERT INTO Scholarship VALUES (?)', [request.body.name], function (err) {
    if (err) {
      console.log("Error: " + err);
    } else {
      response.status(200).redirect('addScholarship.html');
    }
  });
});

// check that server is running
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
