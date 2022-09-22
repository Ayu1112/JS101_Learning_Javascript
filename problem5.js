
// If the number is divisible by 3, print a "multiple of 3".


if (12 % 3 === 0) {
  console.log("multiple of 3");
}// If a person is allowed to drive in India print "Apply for a license" or "NA".

var age = 18;

var legal_age = 18;

if (age >= legal_age) {
  console.log("Apply for License")
}
else {
  console.log("NA");
}// Given 2 numbers a and b print which is greater or "both equal".


var a = 13;

var b = 13;

if (a > b) {
  console.log("a is greater");
}

else if (a < b) {
  console.log("b is greater");
}
else {
  console.log("both are equal");
}// Given stored username and password and input username and password, Print if the user can login or not.


var stored_username = "badsoulak@gmail.com";

var stored_password = "qwerty123@";

var input_username = "bad1soulak@gmail.com";

var input_password = "qwerty123@";

if (stored_username == input_username) {
  if (stored_password == input_password) {
    console.log("Login Successful");
  }
  else {
    console.log("Incorrect Password");
  }
}
else {
  console.log("Invalid Credentials");
}