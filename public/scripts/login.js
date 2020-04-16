// Array that stores each users username, password, and if they're a scholarship coordinator
/*var users = [
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
*/
function testAlert() {
  alert("Code reached");
}

var login;
var userType;
var username;
var password;
var users;
function testAlert() {
  alert("Code reached");
}

// request scholarships from server
function getLogin() {
  $.get("/userLogin", function (data) {
    if (!data) {
      console.log("No data received");
    }
    console.log("Received data:");
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
    users = data;
  });
}
getLogin();
function checkLogin(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].username == username && data[i].password == password) {
      login = true;
      userType = data[i].userType;
    }
    console.log(data[i].password+", "+password);
  }
  //alert(userType);
}

// Validates if the username and password are correct
function validate() {
  // Check if the login and password are correct
  username = document.getElementById("name");
  password = document.getElementById("psw");
  username = username.value;
  password = password.value;
  checkLogin(users);
  if (username === "" || password === "") {
    alert("Username and Password required");
    return false;
  } else if (login === true) {
    // if username and password are correct, open the homepage
    console.log(userType);
    if (userType === "coordinator")
      window.open("./coordinator/home.html");
    else if (userType === "professor")
      window.open("./professor/profHome.html");
    else {
      window.open("./student/studentHome.html");
    }
    return true;
  } else {
    alert("Incorrect Username or Password");
    return false;
  }
}
// show password
function myFunction() {
  let x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// display login box
function loginBoxdisplay(v) {
  if (v == 1) {
    document.getElementById("id01").style.display = "none";
    document.getElementById("loginbox").style.visibility = "visible";
  } else if (v == 0) {
    document.getElementById("id01").style.display = "block";
    document.getElementById("loginbox").style.visibility = "hidden";
  }
}
