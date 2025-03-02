let account = prompt("nhap ten ");
if (account == "admin") {
  let passWord = prompt("nhap mat khau");
  if (passWord == "TheMaster") {
    console.log("welcome");
  } else if (passWord == null) {
    console.log("Cancelled");
  } else {
    console.log("Wrong password");
  }
} else if (account == null) {
  console.log("Cancelled");
} else {
  console.log("I dont know u");
}
