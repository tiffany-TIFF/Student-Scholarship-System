var users = ["Admin", "TestUser"];
var passes = ["AdminPass", "TestPass"];

function testAlert() {
  alert("Code reached");
}

// Validates if the username and password are correct
function validate()
    {
      var username = document.getElementById("name");
      var password = document.getElementById("psw");

      username = username.value;
      password = password.value;

      if(users.indexOf(username) > -1) {
        var userIndex = users.indexOf(username);
      }

      if(username == "" ||password == "")
      {
        alert("Username and Password required");
        return false;
      }

      else if(users.indexOf(username) > -1 && passes[userIndex] == password)
      {
        alert("Login success!");
        return true;
      }
      else{
        alert("Incorrect Username or Password");
        return false;
      }
    }

    function myFunction(){
      let x = document.getElementById("psw");
      if (x.type === "password") {
        x.type = 'text';
      } else {
        x.type = "password";
      }
    }

    function loginBoxdisplay(v){
      
      if (v == 1){
        document.getElementById('id01').style.display='none';
        document.getElementById('loginbox').style.visibility = 'visible';
      }
      else if(v == 0){
        document.getElementById('id01').style.display='block';
        document.getElementById('loginbox').style.visibility = 'hidden';
      }
    }
    