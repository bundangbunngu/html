function checkNumber(arr) {
  let arrNew = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        arrNew.push(arr[i]);
      }
    }
    arrNew.length > 0
      ? console.log(arrNew)
      : console.log("mang ko chua so chan");
  } else {
    console.log("du lieu ko hop le");
  }
}
checkNumber([11, 4, 65, 6]);
checkNumber([1, 3, 5, 17]);
checkNumber("text");
