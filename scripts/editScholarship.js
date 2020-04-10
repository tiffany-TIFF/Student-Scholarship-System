var scholarships = [
  {
    name: "uwu Scholarship",
    overview: "This scholarships is really good",
    value: "$1",
    deadline: "01/01/2020",
    study: "Undergraduate",
  },
  {
    name: "owo Scholarship",
    overview: "This scholarships is really good",
    value: "$1",
    deadline: "01/01/2020",
    study: "Undergraduate",
  },
  {
    name: "T-T Scholarship",
    overview: "This scholarships is really good",
    value: "$1",
    deadline: "01/01/2020",
    study: "Undergraduate",
  },
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
