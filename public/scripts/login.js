// Array that stores each users username, password, and if they're a scholarship coordinator
var users = [
  {
    user: "Admin",
    pass: "AdminPass",
    coordinator: true,
    professor: false,
  },
  {
    user: "TestUser",
    pass: "TestPass",
    coordinator: false,
    professor: false,
  },
  {
    user: "ProfUser",
    pass: "ProfPass",
    coordinator: false,
    professor: true
  }
];

function testAlert() {
  alert("Code reached");
}

// Validates if the username and password are correct
function validate() {
  var username = document.getElementById("name");
  var password = document.getElementById("psw");

  username = username.value;
  password = password.value;

  if (users.findIndex((x) => x.user === username) > -1) {
    var userIndex = users.findIndex((x) => x.user === username);
  }

  // Check if the login and password are correct
  if (username === "" || password === "") {
    alert("Username and Password required");
    return false;
  } else if (userIndex > -1 && users[userIndex].pass === password) {
    alert("Login success!");
   if (users[userIndex].coordinator == true) {
      window.open("./coordinator/home.html");
   }
   if(users[userIndex].professor == true)
   {
     window.open("./professor/profHome.html")
   }
    else{
      window.open("./student/studentHome.html");
    }
    return true;
  } else {
    alert("Incorrect Username or Password");
    return false;
  }
}

function myFunction() {
  let x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function loginBoxdisplay(v) {
  if (v == 1) {
    document.getElementById("id01").style.display = "none";
    document.getElementById("loginbox").style.visibility = "visible";
  } else if (v == 0) {
    document.getElementById("id01").style.display = "block";
    document.getElementById("loginbox").style.visibility = "hidden";
  }
}
