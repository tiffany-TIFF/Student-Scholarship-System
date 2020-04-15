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
    document.getElementById("yearEntering").innerHTML = newText.textContent;

    // set description
    newText = document.createTextNode(scholarships[index].description);
    document.getElementById("desc").innerHTML = newText.textContent;

    // set award value
    newText = document.createTextNode(scholarships[index].awardValue);
    document.getElementById("awardValue").innerHTML = "$" + newText.textContent;

    /*
    //set application start date
    document.getElementById("startDate").value = scholarships[index].startDate;

    // deadline
    document.getElementById("deadline").value = scholarships[index].deadline;

    // minimumm gpa
    document.getElementById("Grade").value = scholarships[index].MinimumGPA;

    // set Nomination
    if (scholarships[index].Nomination == "Y") {
        document.getElementById("nomin").checked = true;
    }

    // set transcript requirements
    if (scholarships[index].NoFail == "Y") {
        document.getElementById("noF").checked = true;
    }

    // set transcript requirements
    if (scholarships[index].NoWithdraw == "Y") {
        document.getElementById("noW").checked = true;
    }

    // set transcript 
    if (scholarships[index].Transcript == "Y") {
        document.getElementById("trans").checked = true;
    }
    */
}