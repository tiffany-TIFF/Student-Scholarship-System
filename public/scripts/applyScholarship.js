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

// show scholarships available  in dropdown
function showScholarships(scholarships){
    var select = document.getElementById("scholarships");

    for (var i = 0; i < scholarships.length; i++) {
        var option = document.createElement("OPTION"),
        //nom = document.createTextNode(scholarships[i].Nomination),
        //yes = document.createTextNode("Y");
    
    //only display scholarships that need nominations
    //if(nom.isEqualNode(yes))
    //{
        var txt = document.createTextNode(scholarships[i].name);
        option.appendChild(txt);
        select.insertBefore(option, select.lastChild);
    //}
    }
}