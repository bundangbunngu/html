let arr = [1, 4, 7, 8, 3];

let chan = 0;
let le = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    chan += arr[i];
  } else {
    le += arr[i];
  }
}
console.log(chan, "chan");
console.log(le, "le");
