let a = +prompt("nhap vao so a");
let b = +prompt("nhap vao luy thua b");

let result = 1;
if (Number.isInteger(a, b)) {
  for (let i = 1; i <= b; i++) {
    result = result * a;
  }

  console.log(result);
} else {
  console.log("nhap vao so nguyen va so mu");
}
