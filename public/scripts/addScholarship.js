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

