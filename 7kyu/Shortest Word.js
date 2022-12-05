function findShort(s){
  let lengthArr =  s.split(" ").map(s => s.length);
  // console.log(lengthArr)
  return Math.min(...lengthArr)
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))