var nominationsIndex = [];
var transcriptIndex = [];

getScholarships();
// request scholarships from server
function getScholarships() {
  $.get("/updateScholarship", function (data) {
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
      var option = document.createElement("OPTION");
        
      var txt = document.createTextNode(scholarships[i].name);
      option.appendChild(txt);
      select.insertBefore(option, select.lastChild);

      var nom = document.createTextNode(scholarships[i].Nomination),
        yes = document.createTextNode("Y");
      
      if (nom.isEqualNode(yes))
        nominationsIndex.push(i);

      var trans = document.createTextNode(scholarships[i].Transcript);
      if (trans.isEqualNode(yes))
        transcriptIndex.push(i);
    }

    onChange();
}

function onChange(){
  var scholIndex = document.getElementById("scholarships").selectedIndex;
  
  //Hide/Show nomination
  var nomDiv = document.getElementById("nomination");
  
  nomDiv.style.display = "none";
  
  if(nominationsIndex.includes(scholIndex))
    nomDiv.style.display = "block";
  else
    nomDiv.style.display = "none";

  //Hide/Show transcript
  var transDiv = document.getElementById("transcript");

  transDiv.style.display = "none";

  if(transcriptIndex.includes(scholIndex))
    transDiv.style.display = "block";
  else
    transDiv.style.display = "none";

}