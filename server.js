var express = require("express");
var app = express();

//open access to database
let db = new sqlite3.Database("/db/ScholarshipSystem.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

// specify client-side files as static files
app.use(express.static(__dirname + "/public"));

// routes for requests so they are sent to the right path on the server, and sends a response
// "/" means to get the root file, usually the index or the home page
app.get("/", function (request, response) {
  response.send("Hello, world");
});

app.get("/test", function (request, response) {
  console.log("GET request received at /comments");
  db.all("SELECT * FROM cheese", function (err, rows) {
    if (err) {
      console.log("Error: " + err);
    } else {
      response.send(rows);
    }
  });
});

// client sends data to server, most commonly sent from a user submitting a form
app.post("/test", function (request, response) {
  console.log("POST request received at /comments");
});

// check that server is running
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
