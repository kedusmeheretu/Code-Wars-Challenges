// Return the number (count) of vowels in the given string.


function getCount(str) {
  let vowelsCount = 0;
  let vowels = 'aeiou';
  // enter your magic here
  for (let i in str){
    for(let j in vowels){
      if (str[i] === vowels[j]){
        vowelsCount ++;
      }
    }
  }
  return vowelsCount;
}

// Testing

console.log(getCount('abracadabra')); // 5