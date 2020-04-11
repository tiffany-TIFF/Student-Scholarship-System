var scholarships = [
];

// Creates the Scholarship table from data
function buildTable(table, data) {
  for (var element of data) {
    let row = table.insertRow();
    for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
  }
}
