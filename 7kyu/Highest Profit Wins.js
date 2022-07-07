// Write a function that returns both the minimum and maximum number of the given list/array.


function lowHigh(arr){
  return [Math.min(...arr), Math.max(...arr)]
  }


// test
console.log(lowHigh([5,4,3,2,1]));