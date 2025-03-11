function demSoLuong(arr) {
  if (Array.isArray(arr)) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) && arr[i] > 0) {
        count++;
      }
    }
    if (count == 0) {
      console.log("ko co so nguyen duong");
    } else {
      console.log(count);
    }
  }
}
demSoLuong([4, 5.4, 6, -2]);
demSoLuong([1, 2, 5, 7, -8, 6]);
demSoLuong([1.2, -3, -6]);
