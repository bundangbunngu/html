let a = +prompt("nhap vao 1 so tu 1 -> N");
if (a > 0 && Number.isInteger(a)) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  console.log(sum);
} else {
  console.log("ko hop le");
}
