// include modules
var express = require("express");
var app = express();
const sqlite3 = require("sqlite3").verbose();
var bodyParser = require('body-parser');

//open access to database
let db = new sqlite3.Database("./ScholarshipSystem.db", (err) => {
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
app.get("/statistics", function (request, response) {
  console.log("GET request 2 received at /ScholarshipSystem");
  let sql = ` SELECT t.Year year,
              t.NumOfApplications numOfApplications,
              t.NumofRecipients numOfRecipients,
              t.AcceptanceRatio acceptanceRatio,
              s.Name name
              FROM ScholarshipStatistics as t, 
              Scholarship as s
              WHERE t.SchID = s.SchID`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("get");
      response.send(rows);
    }
  });
});

app.get("/scholarshipid", function (request, response) {
  console.log("GET request received at /scholarshipid");
  let sql = `SELECT SchID FROM Scholarship`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("got id");
      response.send(rows);
    }
  });
});

app.get("/departments", function (request, response) {
  console.log("GET request received at /departments");
  let sql = `SELECT DepartmentCode FROM Department`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("got department codes");
      response.send(rows);
    }
  });
});

app.get("/ScholarshipSystem", function (request, response) {
  console.log("GET request received at /ScholarshipSystem");
  let sql = `SELECT s.SchID, s.Name name --s.*
  , s.Description description
  , d.DepartmentCode departmentCode
  , s.AwardValue awardValue, s.Deadline deadline
  , c.Value as "StudentType"
  , b.Value as "YearEntering" 
  , f.Value as "Nomination"
  from Scholarship s
       LEFT JOIN ScholarshipDepartment d on s.SchID=d.SchID
       LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='StudentType') c on s.SchID=c.SchID
       LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName = 'Nomination') f on s.SchID=f.SchID
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

app.get("/updateScholarship", function (request, response) {
  console.log("GET request received at /updateScholarship");
  let sql = `Select s.Name name, s.Description description, s.AwardValue awardValue, s.NumberOfAwards numOfAwards --s.*, 
  , d.DepartmentCode departmentCode
  , c.Value as "StudentType"
  , b.Value as "YearEntering"
  , e.Value as "MinimumGPA"
  , f.Value as "Nomination"
  , g.Value as "Transcript"
  , h.Value as "NoFail"
  , i.Value as "NoWithdraw"
  , s.ApplicationStartDate startDate, s.Deadline deadline
from Scholarship s
    LEFT JOIN ScholarshipDepartment d on s.SchID=d.SchID
    LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='StudentType') c on s.SchID=c.SchID
    LEFT JOIN ScholarshipYearEntering b on s.SchID=b.SchID
    LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='MinimumGPA') e on s.SchID=e.SchID
    LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='Nomination') f on s.SchID=f.SchID
    LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='Transcript') g on s.SchID=g.SchID
    LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='NoFail') h on s.SchID=h.SchID
    LEFT JOIN (select SchID, value from ScholarshipCriteria WHERE CriteriaName='NoWithdraw') i on s.SchID=i.SchID`;

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
app.post("/AddScholarship", function (request, response) {
  console.log("POST request received at /AddScholarship");
  db.run('INSERT INTO Scholarship (SchID, Name, Description, AwardValue, NumberOfAwards, ApplicationStartDate, Deadline) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [request.body.id, request.body.name, request.body.desc, request.body.awardValue, request.body.numOfAwards, request.body.startDate, request.body.deadline], function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("written scholarship");
        //response.status(200).redirect('./public/coordinator/editScholarship.html');
      }
    });
  db.run('INSERT INTO SCholarshipCriteria VALUES (?, "Department", ?), (?, "StudentType", ?), (?, "YearEntering", ?), (?, "MinimumGPA", ?), (?, "Nomination", ?), (?, "Transcript", ?) , (?, "NoFail", ?), (?, "NoWithdraw", ?)',
    [request.body.id, request.body.departments,
    request.body.id, request.body.studentTypes,
    request.body.id, request.body.yearEntering,
    request.body.id, request.body.Grade,
    request.body.id, request.body.nomin,
    request.body.id, request.body.trans,
    request.body.id, request.body.noF,
    request.body.id, request.body.noW], function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("written criteria");
        response.status(200).redirect('./coordinator/editScholarship.html');
      }
    });

});

app.post("/updateScholarship", function (request, response) {
  console.log("POST request received at /updateScholarship");
  //const SchID = urlParams.get('SchID');
  db.run('UPDATE Scholarship SET Name = ?, Description = ?, AwardValue = ?, NumberOfAwards = ?, ApplicationStartDate = ?, Deadline = ? WHERE SchID = ?',
    [request.body.name, request.body.desc, request.body.awardValue, request.body.numOfAwards, request.body.startDate, request.body.deadline, request.body.id], function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("updated scholarship");
        //response.status(200).redirect('./public/coordinator/editScholarship.html');
      }
    });
    db.run('DELETE FROM SCholarshipCriteria WHERE SchID = ?', [request.body.id], function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        //console.log("updated scholarship");
        //response.status(200).redirect('./public/coordinator/editScholarship.html');
      }
    });
    db.run('INSERT INTO SCholarshipCriteria VALUES (?, "Department", ?), (?, "StudentType", ?), (?, "YearEntering", ?), (?, "MinimumGPA", ?), (?, "Nomination", ?), (?, "Transcript", ?) , (?, "NoFail", ?), (?, "NoWithdraw", ?)',
    [request.body.id, request.body.departments,
    request.body.id, request.body.studentTypes,
    request.body.id, request.body.yearEntering,
    request.body.id, request.body.grade,
    request.body.id, request.body.nomin,
    request.body.id, request.body.trans,
    request.body.id, request.body.noF,
    request.body.id, request.body.noW], function (err) {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("written criteria");
        response.status(200).redirect('./coordinator/editScholarship.html');
      }
    });
});

// check that server is running
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
