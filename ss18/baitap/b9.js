let hours = Number(prompt("Nhập giờ (0-23):"));
let minutes = Number(prompt("Nhập phút (0-59):"));
let seconds = Number(prompt("Nhập giây (0-59):"));

if (
  hours === undefined ||
  hours === null ||
  hours < 0 ||
  hours > 23 ||
  hours !== Math.floor(hours)
) {
  console.log("Giờ không hợp lệ. Vui lòng nhập số từ 0-23.");
}

if (
  minutes === undefined ||
  minutes === null ||
  minutes < 0 ||
  minutes > 59 ||
  minutes !== Math.floor(minutes)
) {
  console.log("Phút không hợp lệ. Vui lòng nhập số từ 0-59.");
}

if (
  seconds === undefined ||
  seconds === null ||
  seconds < 0 ||
  seconds > 59 ||
  seconds !== Math.floor(seconds)
) {
  console.log("Giây không hợp lệ. Vui lòng nhập số từ 0-59.");
}

let period = hours < 12 ? "AM" : "PM";

hours = hours % 12 || 12;

let minutes2 = minutes < 10 ? "0" + minutes : "" + minutes;
let seconds2 = seconds < 10 ? "0" + seconds : "" + seconds;

let result = hours + ":" + minutes2 + ":" + seconds2 + " " + period;

console.log(result);
