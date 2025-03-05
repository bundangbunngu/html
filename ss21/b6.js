let a = +prompt("nhap 1 so nguyen bat ky");

if (Number.isInteger(a)) {
  for (let i = 1; i <= Math.abs(a); i++) {
    if (a % i == 0) {
      console.log(`cac uoc cua so a la ${i}`);
    }
  }
} else {
  console.log("nhap so nguyen");
}
