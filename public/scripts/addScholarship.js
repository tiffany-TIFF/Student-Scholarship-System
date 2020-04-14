getDepartments();
getID();
// request scholarships from server
function getDepartments() {
  $.get("/departments", function (data) {
    if (!data) {
      console.log("No data received");
    }
    console.log("Received data:");
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i].DepartmentCode);
    }
    deptArray(data);
  });
}
function getID() {
  $.get("/scholarshipid", function (data) {
    if (!data) {
      console.log("No data received");
    }
    console.log("Received data:");
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i].SchID);
    }
    console.log(data[data.length-1].SchID+1);
    document.getElementById("id").value = data[data.length-1].SchID+1;
  });
}

/*Array for Course Codes*/
function deptArray(dept) {
  var select = document.getElementById("departments");

  for (var i = 0; i < dept.length; i++) {
    var option = document.createElement("OPTION"),
      txt = document.createTextNode(dept[i].DepartmentCode);
    option.appendChild(txt);
    select.insertBefore(option, select.lastChild);
  }
}

/*Automated Scholarship Date*/
function dateOfScholarship(typeOfScholarship) {
  //Yearly Scholarship
  if (typeOfScholarship == "1") {
    //start date for Scholarship
    var startDate = new Date();
    startDate.setMonth(8);
    startDate.setDate(13);

    var strStart =
      startDate.getFullYear() +
      "/" +
      (startDate.getMonth() + 1) +
      "/" +
      startDate.getDate();
    document.getElementById("startDate").value = strStart;

    //Deadline for Scholarship
    var deadline = new Date();
    deadline.setMonth(4);
    deadline.setDate(13);
    deadline.setFullYear(deadline.getFullYear() + 1);

    var strDead =
      deadline.getFullYear() +
      "/" +
      (deadline.getMonth() + 1) +
      "/" +
      deadline.getDate();
    document.getElementById("deadline").value = strDead;
  }

  //Fall Scholarship
  if (typeOfScholarship == "2") {
    //start date for Scholarship
    var startDate = new Date();
    startDate.setMonth(8);
    startDate.setDate(13);

    var strStart =
      startDate.getFullYear() +
      "/" +
      (startDate.getMonth() + 1) +
      "/" +
      startDate.getDate();
    document.getElementById("startDate").value = strStart;

    //Deadline for Scholarship
    var deadline = new Date();
    deadline.setMonth(11);
    deadline.setDate(13);

    var strDead =
      deadline.getFullYear() +
      "/" +
      (deadline.getMonth() + 1) +
      "/" +
      deadline.getDate();
    document.getElementById("deadline").value = strDead;
  }

  //Winter Scholarship
  if (typeOfScholarship == "3") {
    //start date for Scholarship
    var startDate = new Date();
    startDate.setMonth(0);
    startDate.setDate(13);
    startDate.setFullYear(startDate.getFullYear() + 1);

    var strStart =
      startDate.getFullYear() +
      "/" +
      (startDate.getMonth() + 1) +
      "/" +
      startDate.getDate();
    document.getElementById("startDate").value = strStart;

    //Deadline for Scholarship
    var deadline = new Date();
    deadline.setMonth(4);
    deadline.setDate(13);
    deadline.setFullYear(deadline.getFullYear() + 1);

    var strDead =
      deadline.getFullYear() +
      "/" +
      (deadline.getMonth() + 1) +
      "/" +
      deadline.getDate();
    document.getElementById("deadline").value = strDead;
  }

  //"blank" fields
  if (typeOfScholarship == "4") {
    var str = "yyyy/mm/dd";
    document.getElementById("startDate").value = str;
    document.getElementById("deadline").value = str;
  }
}

