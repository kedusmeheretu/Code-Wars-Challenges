// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.


function squareDigits(num){
  return Number(String(num).split("").map(function (item) { return Math.pow(Number(item), 2); }).join(""));
}

// Testing

console.log(squareDigits(3212)); // 9414