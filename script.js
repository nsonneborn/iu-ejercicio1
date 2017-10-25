
// just tryna play with regular expresions
function validatePassword() {
  var psw = blah // fill this in lol
  if (!/^\w{1,8}$/.test(psw)){
    alert("Password can only contain number and letter characters and has maximum length 8");
  }
}
function validateForm(){
  validateEmail();
}
function validateEmail()
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(personalinfo.email.value))
  {
    return (true);
  }
    alert("You have entered an invalid email address!")
    return (false);
}


// Get the modal
var modal = document.getElementById('id01');


// Cookies stuff skeleton from W3schools
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
    console.log("set cookie called");
}

function modalSubmit(){
  var email = $('#emailModal').val();
  var password = $('#passwordModal').val();
  checkCookie(email, password);
  console.log(document.cookie);
  document.getElementById('id01').style.display='none';
}


function getCookie(cname) {
  var name = cname + "=";
  var cookieArray = document.cookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) { // for every cookie in the array
    var c = cookieArray[i]; // get the substring
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  return " ";
}

function checkCookie(email, password) {
    if (email == getCookie('email') && password == getCookie('password')) {
        console.log("recognized email and password");
        fillInfo();
    } else {
      delete_cookie(document.cookie);
      setCookie('email', email);
      setCookie('password', password);
      console.log("didn't recognize email/pass");
        }
}

function fillInfo(){
  $('#fname').val(getCookie('fname'));
  $('#lname').val(getCookie("lname"));
  $('#email').val(getCookie("email"));
  $('#dob').val(getCookie("dob"));
  $('#lang').val(getCookie("lang"));
  $('#profpic').val(getCookie("profpic"));
}

function saveCookie(){
  var username = document.modal.email.value;
  var password = document.modal.password.value;
  var fname = document.personalinfo.fname.value;
  var lname = document.personalinfo.lname.value;
  var email = document.personalinfo.email.value;
  var dob = document.personalinfo.dob.value;
  var lang = document.personalinfo.lang.value;
  var profpic = document.personalinfo.profpic.value;
  setCookie("username", username);
  setCookie("password", password);
  setCookie("fname", fname);
  setCookie("lname", lname);
  setCookie("email", email);
  setCookie("dob", dob);
  setCookie("lang", lang);
  setCookie("profpic", profpic);
}

function delete_cookie(name){
   document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

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
