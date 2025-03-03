let a = +prompt("1. VND -> USD 2. USD -> VND");

if (a == 1) {
  let b = +prompt("nhap so tien VND muon doi");
  let c = b / 23000;
  console.log(c);
} else if (a == 2) {
  let b = +prompt("nhap so tien USD muon doi");
  let c = b * 23000;
  console.log(c);
} else {
  console.log("nhap sai gia tri");
}
