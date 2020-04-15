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

    // create link for scholarship
    var link = document.createElement('a');
    var queryString = "?SchID=" + scholarships[i].SchID;
    link.setAttribute('href', 'updateScholarship.html' + queryString);
    link.appendChild(document.createTextNode(scholarships[i].name));
    // append a  node to the cell
    newCell.appendChild(link);

    // department column
    newCell = newRow.insertCell(1);
    newText = document.createTextNode(scholarships[i].departmentCode);
    newCell.appendChild(newText);

    // award column
    newCell = newRow.insertCell(2);
    newText = document.createTextNode("$" + scholarships[i].awardValue);
    newCell.appendChild(newText);

    // deadline column
    newCell = newRow.insertCell(3);
    newText = document.createTextNode(scholarships[i].deadline);
    newCell.appendChild(newText);

    // year entering column
    newCell = newRow.insertCell(4);
    if (scholarships[i].YearEntering !== null) {
      newText = document.createTextNode(scholarships[i].YearEntering);
    } else {
      newText = document.createTextNode("Any");
    }
    newCell.appendChild(newText);

    // student type column
    newCell = newRow.insertCell(5);
    newText = document.createTextNode(scholarships[i].StudentType);
    newCell.appendChild(newText);
  }
}