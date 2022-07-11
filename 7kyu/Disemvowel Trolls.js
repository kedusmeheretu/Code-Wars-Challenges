//Your task is to write a function that takes a string and return a new string with all vowels removed.


function disemvowel(str) {
  const regex = /[aeiou]/gi
  const noVowels = str.replace(regex, '');
  return noVowels;
  
}

// Testing

console.log(disemvowel("This website is for losers LOL!")); // Ths wbst s fr lsrs LL
