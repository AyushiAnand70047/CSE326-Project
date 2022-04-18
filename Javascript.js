// Login Page
function Validate() {
  if (document.form.Email.value == "") {
    alert("Please enter username or email");
    document.form.Email.focus();
    return false;
  } else if (document.form.Password.value == "") {
    alert("Please enter your password");
    document.form.Password.focus();
    return false;
  } else {
    return true;
  }
}

// Heading
function home() {
  window.location = "home.html";
}
function blog() {
  window.location = "blog.html";
}
function contact() {
  window.location = "Contactus.html";
}
function login() {
  window.location = "login.html";
}
// Blog
function c() {
  window.location = "C_programming.html";
}
function cpp() {
  window.location = "C++_Programming.html";
}
function html() {
  window.location = "Html.html";
}
function css() {
  window.location = "Css.html";
}
function js() {
  window.location = "Javascript.html";
}
// Contact Us
function val() {
  var n = document.getElementById("name").value;
  var p = document.getElementById("pass").value;
  var m= document.getElementById("num").value;
  if (n == "") {
    alert("Please enter your name");
  }
  var e = document.getElementById("email").value;
  atpos = e.indexOf("@");
  dotpos = e.lastIndexOf(".");

  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter valid email ID");
  }
  if (p == "") {
    alert("Please enter your password");
  }
  if(isNaN(m) || m.length!=10)
  {
           alert("Please enter a valid mobile number");
   }
  if(!document.getElementById("g1").checked && !document.getElementById("g2").checked)
   {
        alert("Please select a gender");
    }
  if(document.getElementById("q1").value=="-1")
   {
       alert("Please select a query topic");
    }
    else{
      alert("Thank You! , Data Saved Successfully!  We will contact You Soon ")
    }
}
