let a = +prompt("Nhập vào số nguyên thứ nhất");
let b = +prompt("Nhập vào số nguyên thứ hai");
let c = +prompt("Nhập vào số nguyên thứ ba");
let d = +prompt("Nhập vào số nguyên thứ tư");
let e = +prompt("Nhập vào số nguyên thứ năm");

let sum = 0;
if (Number.isInteger(a, b, c, d, e)) {
  if (a % 2 !== 0) sum += a;
  if (b % 2 !== 0) sum += b;
  if (c % 2 !== 0) sum += c;
  if (d % 2 !== 0) sum += d;
  if (e % 2 !== 0) sum += e;
  console.log(`Tổng các số lẻ là: ${sum}`);
} else {
  console.log("nhap so nguyen");
}
