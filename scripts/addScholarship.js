
/*Array for Course Codes*/
function deptArray() {
    var select = document.getElementById("departments"),
        arr = ["ACWR", "ACCT", "ACSC", "ENAE", "AFST", "ASL", "ANTH", "ALMC", "ARKY",
                "ARST", "ARCH", "APLA", "ART", "ARHI", "ASHA", "ARTS", "ASTR", "ASPH",
                "BCEM", "BIOL", "BMEN", "BIST", "BOTA", "VSEN", "BTMA", "CNST", "CMMB",
                "CEST", "ENCH", "CHEM", "CHIN", "ENCI", "CMCL", "COMS", "MDCH", "CORE",
                "CMDA", "ENCM", "CPSC", "COOP", "DNCE", "DCED", "DATA", "DEST", "DRAM",];
    
        for(var i = 0; i < arr.length; i++)
        {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(arr[i]);
            option.appendChild(txt);
            select.insertBefore(option, select.lastChild);
        }
    }