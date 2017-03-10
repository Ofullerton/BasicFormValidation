function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Show message that there is an error with the username...
  if (userEntered.length < 6) {
  document.getElementById("usernameError").innerHTML="Unsername cannot be less than 6 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
  //Show message that there is an error with the password...
  if (passEntered.length < 6){
  document.getElementById("passwordError").innerHTML="Password cannot be less than 6 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
if (passEntered.length > 20){
document.getElementById("passwordError").innerHTML="Password cannot be more than 20 characters.";
document.getElementById("passwordError").classList.remove("hidden-message");
document.getElementById("passwordError").classList.add("shown-message");
//Turn the password items red
document.getElementById("passwordGroup").classList.add("has-error");
}
if (userEntered.length >= 6) {
  document.getElementById("has-success").classList.add("shown-message")
}
if (passEntered == "password") {
document.getElementById("passwordError").innerHTML="Password cannot be password";
document.getElementById("passwordError").classList.remove("hidden-message");
document.getElementById("passwordError").classList.add("shown-message");
//Turn the password items red
document.getElementById("passwordGroup").classList.add("has-error");
}
if (passEntered == userEntered) {
document.getElementById("passwordError").innerHTML="Password cannot be userEntered";
document.getElementById("passwordError").classList.remove("hidden-message");
document.getElementById("passwordError").classList.add("shown-message");
//Turn the password items red
document.getElementById("passwordGroup").classList.add("has-error");
}
}
