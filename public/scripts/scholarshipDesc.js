const urlParams = new URLSearchParams(window.location.search);
const SchID = urlParams.get('SchID');
var index = SchID - 1;

// request scholarships from server
window.onload = function getScholarships() {
    $.get("/updateScholarship", function (data) {
        if (!data) {
            console.log("No data received");
        }
        //console.log("Received data:");
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i].name);
        }

        showData(data);
    });
}
// Show current data
function showData(scholarships) {
    //console.log(scholarships);
    //set name

    document.getElementById("sName").innerHTML = scholarships[index].name;

    //set department
    var newText = document.createTextNode(scholarships[index].departmentCode)
    document.getElementById("departments").innerHTML = newText.textContent;
    
    
    //set student type
    newText = document.createTextNode(scholarships[index].StudentType);
    document.getElementById("studentTypes").innerHTML = newText.textContent;
    
    // set year entered
    newText = document.createTextNode(scholarships[index].YearEntering);

    if (scholarships[index].YearEntering !== null)
        document.getElementById("yearEntering").innerHTML = newText.textContent;
    else
        document.getElementById("yearEntering").innerHTML = "Any year";

    // set description
    newText = document.createTextNode(scholarships[index].description);
    document.getElementById("desc").innerHTML = newText.textContent;

    // set award value
    newText = document.createTextNode(scholarships[index].awardValue);
    document.getElementById("awardValue").innerHTML = "$" + newText.textContent;

    
    //set application start date
    newText = document.createTextNode(scholarships[index].startDate);
    document.getElementById("startDate").innerHTML = newText.textContent;

    // deadline
    newText = document.createTextNode(scholarships[index].deadline);
    document.getElementById("deadline").innerHTML = newText.textContent;

 
    // minimumm gpa
    newText = document.createTextNode(scholarships[index].MinimumGPA);
    document.getElementById("Grade").innerHTML = newText.textContent;

    // set transcript requirements
    var NoF = document.createTextNode(scholarships[index].NoFail);
    var NoW = document.createTextNode(scholarships[index].NoWithdraw);
    var yes = document.createTextNode("Y");
    if (NoF.isEqualNode(yes)) {
        document.getElementById("NoF").innerHTML = "No Fails";
    }

    // set transcript requirements
    if (NoW.isEqualNode(yes)) {
        document.getElementById("NoW").innerHTML = "No Withdraws";
    }
    
    var nomin = document.createTextNode(scholarships[index].Nomination);
    var trans = document.createTextNode(scholarships[index].Transcript);
    // set Nomination
    if (nomin.isEqualNode(yes)) {
        document.getElementById("nomin").innerHTML = "Nomination Required";
    }

    // set transcript 
    if (trans.isEqualNode(yes)) {
        document.getElementById("trans").innerHTML = "Transcript Required";
    }

}