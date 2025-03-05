let a = +prompt("Nhập vào số nguyên thứ nhất");
let b = +prompt("Nhập vào số nguyên thứ hai");
let c = +prompt("Nhập vào số nguyên thứ ba");
let d = +prompt("Nhập vào số nguyên thứ tư");
let e = +prompt("Nhập vào số nguyên thứ năm");

let chan = 0;
let le = 0;

if (Number.isInteger(a, b, c, d, e)) {
  if (a % 2 == 0) {
    chan++; 
  } else {
    le++;
  }
  if (b % 2 == 0) {
    chan++;
  } else {
    le++;
  }
  if (c % 2 == 0) {
    chan++;
  } else {
    le++;
  }
  if (d % 2 == 0) {
    chan++;
  } else {
    le++;
  }
  if (e % 2 == 0) {
    chan++;
  } else {
    le++;
  }
  console.log("So chan:", chan);
  console.log("so le:", le);
} else {
  console.log("vui long nhap so nguyen");
}
