function validateForm() {
  let x = document.forms["form"]["password"].value;
  let y = document.forms["form"]["confirmpassword"].value;
  if (x === "") {
    alert("password must be filled out");
    return false;
  } else if (x !== y) {
    alert("You've typed different password!");
    return false;
  }
}
