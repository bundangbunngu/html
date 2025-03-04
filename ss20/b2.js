let a = +prompt("nhap 1 so tu 1 toi N");
if (a > 0 && Number.isInteger(a)) {
  for (let i = 1; i <= a; i++) {
    if (i % 5 == 0) {
      console.log(`cac so chia het cho 5 tu 1 den ${a} la :${i}`);
    }
  }
} else {
  console.log("ko hop le");
}
