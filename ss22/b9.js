let arr = [3, 1, 2, 3, 4, 2, 3, 1, 5, 3];

let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

uniqueArr.sort((a, b) => a - b);

console.log(
  "Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:",
  uniqueArr
);
