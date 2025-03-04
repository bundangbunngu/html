let num = parseInt(prompt("Nhập số n (số lượng số Fibonacci): "));

let fibSeries = [1, 1];
for (let i = 2; i < num; i++) {
  fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
}

console.log(`Dãy Fibonacci với ${num} số đầu tiên:`, fibSeries.join(", "));
