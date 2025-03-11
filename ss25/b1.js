function findMin(arr) {
  if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }

  if (arr.length === 0) {
    console.log("Mảng không chứa phần tử");
    return;
  }

  let minNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) && arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }

  console.log("Số nhỏ nhất:", minNumber);
}

findMin([3, 4, 5, 1, 6, 8, 0]);
