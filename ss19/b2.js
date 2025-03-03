let a = prompt("nhap vao 1 ky tu");
if (
  a.indexOf("0") != -1 ||
  a.indexOf("1") != -1 ||
  a.indexOf("2") != -1 ||
  a.indexOf("3") != -1 ||
  a.indexOf("4") != -1 ||
  a.indexOf("5") != -1 ||
  a.indexOf("6") != -1 ||
  a.indexOf("7") != -1 ||
  a.indexOf("8") != -1 ||
  a.indexOf("9") != -1
) {
  console.log(`ky tu ${a} ko phai chu cai`);
} else {
  console.log(`ky tu ${a} la chu cai`);
}
