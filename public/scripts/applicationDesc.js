const urlParams = new URLSearchParams(window.location.search);
const SchID = urlParams.get('SchID');
var index = SchID - 1;

// request scholarships from server
window.onload = function getApplications() {
    $.get("/applications", function (data) {
        if (!data) {
            console.log("No data received");
        }
        console.log("Received data:");
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
        showApplication(data);
    });
}
// Show current data
function showApplication(scholarships) {
    //console.log(scholarships);

    //set name
    var newText = document.createTextNode(scholarships[index].name);
    document.getElementById("sName").appendChild(newText);

    //set student
    newText = document.createTextNode(scholarships[index].studentName);
    document.getElementById("student").innerHTML = newText.textContent;


    //set awardValue
    newText = document.createTextNode(scholarships[index].awardValue);
    document.getElementById("awardValue").innerHTML = newText.textContent;


    newText = document.createTextNode(scholarships[index].deadline);
    document.getElementById("deadline").innerHTML = newText.textContent;

}