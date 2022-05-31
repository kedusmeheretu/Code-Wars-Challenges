function GetSum( a,b ) {
  var max = Math.max(a, b),
      current = Math.min(a, b),
      summ = 0;
  while (current <= max) {
    summ += current++;
  }
  return a === b ? a : summ;
}

console.log(GetSum(3,6))