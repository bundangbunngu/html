let a = prompt("nhap vao 1 chuoi bat ki");
let b = prompt("nhap vao ky tu muon tim kiem");

let found = false;

for (let i = 0; i < a.length; i++) {
  if (a[i] == b) {
    found = true;
    break;
  }
}
if (found) {
  console.log("ky tu co trong chuoi");
} else {
  console.log("ky tu khong co trong chuoi");
}