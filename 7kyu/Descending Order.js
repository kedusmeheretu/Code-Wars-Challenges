// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  let strNum = String(n),
  strNumArr = strNum.split(''),
  strNumArrSort = strNumArr.sort(function(a,b){
    return a - b; 
  });
  
  strNumArrSort = strNumArrSort.reverse();
  strNum = strNumArrSort.join('');
  
  return parseInt(strNum)
  
}

// Tests
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));