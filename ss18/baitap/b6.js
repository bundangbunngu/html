let year = +prompt("nhap 1 nam bat ki");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Là năm nhuận");
} else {
  console.log("Không phải năm nhuận");
}
