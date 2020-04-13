getStatistics();
// request statistics from server
function getStatistics() {
    $.get("/statistics", function (data) {
        if (!data) {
            console.log("No data received");
        }
        console.log("Received data:");
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
        showStatistics(data);
    });
}

// Show scholarship statistics in a table on the page
function showStatistics(statistics) {
    var tableRef = document.getElementById("sTable2019");
    var tableRef2 = document.getElementById("sTable2018");
    var rows = statistics.length / 2;

    // display 2019 statistics
    for (var i = 0; i < rows; i++) {
        // insert a row
        var newRow = tableRef.insertRow();

        // insert a cell in the row
        var newCell = newRow.insertCell(0);
        // append a text node to the cell
        var newText = document.createTextNode(statistics[i].name);
        newCell.appendChild(newText);

        // number of applications column
        newCell = newRow.insertCell(1);
        newText = document.createTextNode(statistics[i].numOfApplications);
        newCell.appendChild(newText);

        // number of recipients column
        newCell = newRow.insertCell(2);
        newText = document.createTextNode(statistics[i].numOfRecipients);
        newCell.appendChild(newText);

        // acceptance ratio column
        newCell = newRow.insertCell(3);
        newText = document.createTextNode(statistics[i].acceptanceRatio);
        newCell.appendChild(newText);

    }

    // display 2018 statistics
    for (var j = 0; j < rows; j++) {
        // insert a row
        var newRow = tableRef2.insertRow();

        // insert a cell in the row
        var newCell = newRow.insertCell(0);
        // append a text node to the cell
        var newText = document.createTextNode(statistics[j].name);
        newCell.appendChild(newText);

        // number of applications column
        newCell = newRow.insertCell(1);
        newText = document.createTextNode(statistics[rows + j].numOfApplications);
        newCell.appendChild(newText);

        // number of recipients column
        newCell = newRow.insertCell(2);
        newText = document.createTextNode(statistics[rows + j].numOfRecipients);
        newCell.appendChild(newText);

        // acceptance ratio column
        newCell = newRow.insertCell(3);
        newText = document.createTextNode(statistics[rows + j].acceptanceRatio);
        newCell.appendChild(newText);

    }

}
