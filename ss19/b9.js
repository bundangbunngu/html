let result;

result = "javascript" + 5;
console.log(result); // "javascript5" (Chuỗi + số => nối chuỗi)

result = "javascript" - 1;
console.log(result); // NaN (Chuỗi không phải số - số => NaN)

result = "3" + 2;
console.log(result); // "32" (Chuỗi + số => nối chuỗi)

result = "5" - 4;
console.log(result); // 1 (Chuỗi dạng số - số => ép kiểu về số)

result = isNaN("123");
console.log(result); // false ("123" có thể chuyển thành số hợp lệ)

result = isNaN("hello");
console.log(result); // true ("hello" không thể chuyển thành số)

result = Number.isNaN("123");
console.log(result); // false ("123" không phải NaN, là chuỗi hợp lệ)

result = Number.isNaN(NaN);
console.log(result); // true (NaN thực sự là NaN)
