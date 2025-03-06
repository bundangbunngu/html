let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let countMap = {};

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (countMap[num] === undefined) {
    countMap[num] = 1;
  } else {
    countMap[num]++;
  }
}

let maxCount = 0;
let result = null;

for (let num in countMap) {
  if (countMap[num] > maxCount) {
    maxCount = countMap[num];
    result = num;
  } else if (countMap[num] === maxCount && num < result) {
    result = num;
  }
}

console.log(
  `Phần tử xuất hiện nhiều nhất là: ${result} (xuất hiện ${maxCount} lần)`
);
