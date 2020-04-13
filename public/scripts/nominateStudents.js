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

function showScholarshipNominations(){
    var select = document.getElementById("nominateScholarship");

    
}