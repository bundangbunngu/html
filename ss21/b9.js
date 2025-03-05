let a = +prompt("Nhập vào một số:");

if (a <= 1) {
  console.log("Không phải là số nguyên tố");
} else {
  let nguyenTo = true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      nguyenTo = false;
      break;
    }
  }
  if (nguyenTo) {
    console.log("Là số nguyên tố");
  } else {
    console.log("Không phải là số nguyên tố");
  }
}
