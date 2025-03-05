let passWord = "abc";

for (let i = 0; i < 3; i++) {
  let a = prompt("nhap mat khau");
  if (a === passWord) {
    console.log("chinh xac");
    break;
  } else {
    console.log("sai");
  }
}
