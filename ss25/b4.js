function kiemTra(a) {
  if (Number.isInteger(a)) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
      if (a % i == 0) {
        count++;
      }
    }
    count == 2
      ? console.log("day la so nguyen to")
      : console.log("day ko phai so nguyen to");
  } else console.log("du lieu ko hop le");
}
kiemTra(17);
kiemTra(6);
kiemTra("text");
