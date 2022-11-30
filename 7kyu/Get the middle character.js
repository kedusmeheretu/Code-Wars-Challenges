function getMiddle(s)
{
  let length = s.length;
  //Code goes here!
  if(s.length % 2 == 0) {
    return s[(length / 2) - 1] + s[(length/2)]; 
  } else if (s.length % 2 == 1) {
    let middle = Math.ceil(s.length / 2 - 1)
    let oddMiddle =  (s[middle])
    return oddMiddle;
  }
}

console.log(getMiddle('test'))
console.log(getMiddle('testing'))
console.log('t')