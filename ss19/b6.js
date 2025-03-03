let a = +prompt("nhap a");
let b = +prompt("nhap b");
let c = +prompt("nhap c");

let delta = b * b - 4 * a * c;

if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log("Phuong trinh co 2 nghiem phan biet x1 = " + x1 + ", x2 = " + x2);
} else if (delta < 0) {
  console.log("Phuong trinh vo nghiem");
} else {
  let x = -b / (2 * a);
  console.log("Phuong trinh co nghiem kep x1 = x2=" + x);
}
