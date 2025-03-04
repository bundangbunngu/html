let a = prompt("Nhập số bất kỳ");

if (Number.isInteger(Number(a))) {
  let str = a.toString();
  let doiXung = true;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      doiXung = false;
      break;
    }
  }

  if (doiXung) {
    console.log("Đây là số đối xứng");
  } else {
    console.log("Đây không là số đối xứng");
  }
} else {
  console.log("Đây không là số nguyên");
}
