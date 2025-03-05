let day = +prompt("nhap ngay sinh");
let month = +prompt("nhap thang sinh");

if (Number.isInteger(a, b)) {
  if ((month == 1 && day <= 19) || (month == 12 && day >= 22))
    console.log("ma ket");
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18))
    console.log("bao binh");
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20))
    console.log("song ngu");
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19))
    console.log("bach duong");
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20))
    console.log("kim nguu");
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
    console.log("song tu");
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22))
    console.log("cu giai");
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22))
    console.log("su tu");
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22))
    console.log("xu nu");
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
    console.log("thien binh");
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
    console.log("bo cap");
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
    console.log("nhan ma");
}
