
// just tryna play with regular expresions
function validatePassword() {
  var psw = blah // fill this in lol
  if (!/^\w{1,8}$/.test(psw)){
    alert("Password can only contain number and letter characters and has maximum length 8")
  }
}
function validateForm(){
  validateEmail()

}
function validateEmail()
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(personalinfo.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Cookies stuff skeleton from W3schools
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

 function saveCookie(){
   var username = document.modal.email.value;
   var password = document.modal.psw.value;
   var fname = document.personalinfo.fname.value;
   var lname = document.personalinfo.lname.value;
   var email = document.personalinfo.email.value;
   var dob = document.personalinfo.dob.value;
   var lang = document.personalinfo.lang.value;
   var profpic = document.personalinfo.profpic.value;
   document.cookie = "user=" + username + ";" + "password=" + password + ";" +
    "firstName=" + fname +";" + "lastName=" +
   lname +";"+ "email=" + email +";" + "dateOfBirth" + dob +";"
   + "language=" + lang +";" + "profPic" + profic+";"

 }


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function optionCheck() {
  selectOptions = document.getElementById("paymentmethod");

  helpDiv1 = document.getElementById("creditcardDiv");
  helpDiv2 = document.getElementById("transferDiv");
  helpDiv3 = document.getElementById("paypalDiv");


  if (selectOptions.options[0].selected) {
    helpDiv1.className = "visible";
  } else {
      helpDiv1.className = "hidden";
  }
  if (selectOptions.options[1].selected) {
      helpDiv2.className = "visible";
  } else {
    helpDiv2.className = "hidden";
  }
  if (selectOptions.options[2].selected) {
      helpDiv3.className = "visible";
  } else {
    helpDiv3.className = "hidden";
  }
}
