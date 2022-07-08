// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(arr) {
  // Return a new array with the strings filtered out
  const noStringsArr = [];
  arr.forEach(el => {
    if (typeof(el) != "string"){
      noStringsArr.push(el);
    }
  });
  return noStringsArr
}

// Test
console.log(filter_list(['1',2,'3']));