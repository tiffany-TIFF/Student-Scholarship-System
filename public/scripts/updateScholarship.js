const urlParams = new URLSearchParams(window.location.search);
const SchID = urlParams.get('SchID');
var index = SchID - 1;

/*Array for Course Codes*/
function deptArray() {
    var select = document.getElementById("departments"),
        dept = [
            "ACWR",
            "ACCT",
            "ACSC",
            "ENAE",
            "AFST",
            "ASL",
            "ANTH",
            "ALMC",
            "ARKY",
            "ARST",
            "ARCH",
            "APLA",
            "ART",
            "ARHI",
            "ASHA",
            "ARTS",
            "ASTR",
            "ASPH",
            "BCEM",
            "BIOL",
            "BMEN",
            "BIST",
            "BOTA",
            "VSEN",
            "BTMA",
            "CNST",
            "CMMB",
            "CEST",
            "ENCH",
            "CHEM",
            "CHIN",
            "ENCI",
            "CMCL",
            "COMS",
            "MDCH",
            "CORE",
            "CMDA",
            "ENCM",
            "CPSC",
            "COOP",
            "DNCE",
            "DCED",
            "DATA",
            "DEST",
            "DRAM",
            "EASC",
            "EALS",
            "EAST",
            "ECOL",
            "ECON",
            "EDBT",
            "EDUC",
            "EDPS",
            "EDER",
            "ENEL",
            "ENEE",
            "EESS",
            "ENER",
            "ENMG",
            "ENGG",
            "ENGL",
            "ENTI",
            "EVDA",
            "EVDS",
            "EVDL",
            "EVDP",
            "ENEN",
            "ENSC",
            "FILM",
            "FNCE",
            "FINA",
            "FREN",
            "GEOG",
            "GLGY",
            "ENGO",
            "GOPH",
            "GERM",
            "GRST",
            "GREK",
            "HSOC",
            "HTST",
            "INDL",
            "INDG",
            "ISEC",
            "INNO",
            "INTR",
            "INTE",
            "IPHE",
            "ITAL",
            "JPNS",
            "KNES",
            "LAND",
            "LANG",
            "LLAC",
            "LAST",
            "LATI",
            "LWSI",
            "LAW",
            "LING",
            "MGST",
            "ENMF",
            "MRSC",
            "MKTG",
            "MATH",
            "ENME",
            "MDGE",
            "MDPH",
            "MDSC",
            "MDCN",
            "MHST",
            "MUED",
            "MUSI",
            "MUPF",
            "NANS",
            "NEUR",
            "NURS",
            "OPMA",
            "OBHR",
            "ENPE",
            "PHIL",
            "PHED",
            "PHYS",
            "PLAN",
            "PLBI",
            "POLI",
            "PLMA",
            "PSYC",
            "PPOL",
            "REAL",
            "RELS",
            "RMIN",
            "ROST",
            "RUSS",
            "SCPA",
            "SCIE",
            "SLAV",
            "SOWK",
            "SOCI",
            "ENSF",
            "SENG",
            "SAST",
            "SPPH",
            "SPAN",
            "STAT",
            "STST",
            "SGMA",
            "SCMA",
            "SUST",
            "SEDV",
            "TAP",
            "TOUR",
            "TRAN",
            "UNEX",
            "UNIV",
            "UBST",
            "VETM",
            "WELL",
            "WMST",
            "ZOOL",
        ];

    for (var i = 0; i < dept.length; i++) {
        var option = document.createElement("OPTION"),
            txt = document.createTextNode(dept[i]);
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
        document.getElementById("id").value = SchID;
    });
}
// Show current data
function showData(scholarships) {
    //console.log(scholarships);
    //set name
    document.getElementById("sName").value = scholarships[index].name;
    //set department
    document.getElementById("departments").value = scholarships[index].departmentCode;
    //set student type
    document.getElementById("studentTypes").value = scholarships[index].StudentType;
    // set year entered
    if (scholarships[index].YearEntering == 1) {
        document.getElementById("1st").checked = true;
    } else if (scholarships[index].YearEntering == 2) {
        document.getElementById("2nd").checked = true;
    } else if (scholarships[index].YearEntering == 3) {
        document.getElementById("3rd").checked = true;
    } else if (scholarships[index].YearEntering == 4) {
        document.getElementById("4th").checked = true;
    }
    // set description
    document.getElementById("desc").value = scholarships[index].description;

    // set award value
    document.getElementById("awardValue").value = scholarships[index].awardValue;

    //set application start date
    document.getElementById("startDate").value = scholarships[index].startDate;

    // deadline
    document.getElementById("deadline").value = scholarships[index].deadline;

    // minimumm gpa
    document.getElementById("Grade").value = scholarships[index].MinimumGPA;

    // num of awards
    document.getElementById("numOfAwards").value = scholarships[index].numOfAwards;

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
}

