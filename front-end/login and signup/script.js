function passwordSignup() {
  var x = document.getElementById("toggleForSignup");
  var icon = document.getElementById("toggleIcon");
  if (x.type === "password") {
    x.type = "text";
    icon.src = "images/icon/eye-open.svg";
  } else {
    x.type = "password";
    icon.src = "images/icon/eye-close.svg";
  }
}

function passwordLogin() {
  var y = document.getElementById("toggleForLogin");
  var icon = document.getElementById("toggleIconL");
  if (y.type === "password") {
    y.type = "text";
    icon.src = "images/icon/eye-open.svg";
  } else {
    y.type = "password";
    icon.src = "images/icon/eye-close.svg";
  }
}
