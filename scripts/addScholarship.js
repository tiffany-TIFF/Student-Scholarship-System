
/*Array for Course Codes*/
function deptArray() {
    var select = document.getElementById("departments"),
        arr = ["ACWR", "ACCT", "ACSC", "ENAE", "AFST", "ASL", "ANTH", "ALMC", "ARKY",
                "ARST", "ARCH", "APLA", "ART", "ARHI", "ASHA", "ARTS", "ASTR", "ASPH",
                "BCEM", "BIOL", "BMEN", "BIST", "BOTA", "VSEN", "BTMA", "CNST", "CMMB",
                "CEST", "ENCH", "CHEM", "CHIN", "ENCI", "CMCL", "COMS", "MDCH", "CORE",
                "CMDA", "ENCM", "CPSC", "COOP", "DNCE", "DCED", "DATA", "DEST", "DRAM",
                "EASC", "EALS", "EAST", "ECOL", "ECON", "EDBT", "EDUC", "EDPS", "EDER",
                "ENEL", "ENEE", "EESS", "ENER", "ENMG", "ENGG", "ENGL", "ENTI", "EVDA",
                "EVDS", "EVDL", "EVDP", "ENEN", "ENSC", "FILM", "FNCE", "FINA", "FREN",
                "GEOG", "GLGY", "ENGO", "GOPH", "GERM", "GRST", "GREK", "HSOC", "HTST",
                "INDL", "INDG", "ISEC", "INNO", "INTR", "INTE", "IPHE", "ITAL", "JPNS",
                "KNES", "LAND", "LANG", "LLAC", "LAST", "LATI", "LWSI", "LAW", "LING",
                "MGST", "ENMF", "MRSC", "MKTG", "MATH", "ENME", "MDGE", "MDPH", "MDSC",
                "MDCN", "MHST", "MUED", "MUSI", "MUPF", "NANS", "NEUR", "NURS", "OPMA",
                "OBHR", "ENPE", "PHIL", "PHED", "PHYS", "PLAN", "PLBI", "POLI", "PLMA",
                "PSYC", "PPOL", "REAL", "RELS", "RMIN", "ROST", "RUSS", "SCPA", "SCIE",
                "SLAV", "SOWK", "SOCI", "ENSF", "SENG", "SAST", "SPPH", "SPAN", "STAT",
                "STST", "SGMA", "SCMA", "SUST", "SEDV", "TAP", "TOUR", "TRAN", "UNEX",
                "UNIV", "UBST", "VETM", "WELL", "WMST", "ZOOL"];
    
        for(var i = 0; i < arr.length; i++)
        {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(arr[i]);
            option.appendChild(txt);
            select.insertBefore(option, select.lastChild);
        }
    }