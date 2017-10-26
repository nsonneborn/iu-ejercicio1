
// just tryna play with regular expresions
function validatePassword() {
  var psw = blah; // fill this in lol
  if (!/^\w{1,8}$/.test(psw)){
    alert("Password can only contain number and letter characters and has maximum length 8")
  }
}

function validateForm(){  //confirmar email del form
  validateEmail();
}

function validateEmail(){   //confirmar email del cookie
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(personalinfo.email.value)){
    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}

var modal = document.getElementById('id01'); // Get the modal

window.onclick = function(event) {  // cerrar modal cuando se hace clic
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function setCookie(cname, cvalue, exdays) { //Cookie stuff skeleton from W3s
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
// Variables
// Get the modal
var modal = document.getElementById('id01');
var originalCookie = "";


// Cookies
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
    // console.log("set cookie called");
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
        originalCookie = document.cookie;
        fillInfo();
    } else {
      // delete_cookie("fname");
      setCookie('email', email);
      setCookie('password', password);
      console.log("didn't recognize email/pass");
        }
    // always fill in email and password and make them uneditable.
    $('#email').val(email);
    $('#password').val("*".repeat(password.length));
    $('#email').prop('readonly', true);
    $('#password').prop('readonly', true);
}

function fillInfo(){
  var fields = ["fname", "lname", "email","dob","lang","profpic", "username", "address", "paymentmethod"]
  for(var i = 0; i < fields.length; i++){
    $('#'+fields[i]).val(getCookie(fields[i]));
  }
  //** for loop is much more efficient, something similar could be used for saveCookies as well

  // $('#fname').val(getCookie('fname'));
  // $('#lname').val(getCookie("lname"));
  // $('#email').val(getCookie("email"));
  // $('#dob').val(getCookie("dob"));
  // $('#lang').val(getCookie("lang"));
  // $('#profpic').val(getCookie("profpic"));
}

function saveCookie(){
  var username = $('#username').val();
  var fname = document.personalinfo.fname.value;
  var lname = document.personalinfo.lname.value;
  var email = document.personalinfo.email.value;
  var dob = document.personalinfo.dob.value;
  var lang = document.personalinfo.lang.value;
  var profpic = document.personalinfo.profpic.value;
  setCookie("username", username);
  setCookie("fname", fname);
  setCookie("lname", lname);
  setCookie("email", email);
  setCookie("dob", dob);
  setCookie("lang", lang);
  setCookie("profpic", profpic);
}
function saveCookie2(){
  var address = document.billinginfo.address.value;
  var paymentmethod = document.billinginfo.paymentmethod.value;
  setCookie("address", address);
  setCookie("paymentmethod", paymentmethod);
  // here, I'm not sure whether it would be yeild an error to get the value of an empty input fields
  // it probably just returns empty string, so the if statements aren't really necessary
  if (paymentmethod == "credit") {
    var cardtype = document.creditcardDiv.cardtype.value;
    var ccnumber = document.creditcardDiv.ccnumber.value;
    var validthru = document.creditcardDiv.validthru.value;
    var cvv = document.creditcardDiv.cvv.value;
    setCookie("cardtype", cardtype);
    setCookie("ccnumber", ccnumber);
    setCookie("validthru", validthru);
    setCookie("cvv", cvv);
  }
  if (paymentmethod == "transfer") {
    var routingno = document.transferDiv.routingno.value;
    var accountno = document.transferDiv.accountno.value;
    var bank = document.transferDiv.bank.value;
  }
}
// I don't end up using this function. Instead, the "Delete" is covered by clearForms()
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

function clearForms(){
  // get all tags of type input, and set their value to the empty string.
  $("input").val("");
}
