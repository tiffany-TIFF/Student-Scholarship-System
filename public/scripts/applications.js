getApplications();
// request scholarships from server
function getApplications() {
    $.get("/applications", function (data) {
        if (!data) {
            console.log("No data received");
        }
        console.log("Received data:");
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
        showApplications(data);
    });
}

// Show scholarships in a table on the page
function showApplications(scholarships) {
    var tableRef = document.getElementById("sTable");
    for (var i = 0; i < scholarships.length; i++) {
        // insert a row
        if (scholarships[i].status === "Submitted") {
            var newRow = tableRef.insertRow();

            // insert a cell in the row
            var newCell = newRow.insertCell(0);

            var link = document.createElement('a');
            var queryString = "?SchID=" + scholarships[i].SchID;
            link.setAttribute('href', 'applications.html' + queryString);
            link.appendChild(document.createTextNode(scholarships[i].name));
            // append a text node to the cell
            //var newText = document.createTextNode(scholarships[i].name);
            newCell.appendChild(link);

            // department column
            newCell = newRow.insertCell(1);
            newText = document.createTextNode(scholarships[i].studentName);
            newCell.appendChild(newText);

            // award column
            newCell = newRow.insertCell(2);
            newText = document.createTextNode("$" + scholarships[i].awardValue);
            newCell.appendChild(newText);

            // deadline column
            newCell = newRow.insertCell(3);
            newText = document.createTextNode(scholarships[i].deadline);
            newCell.appendChild(newText);
        }
    }
}