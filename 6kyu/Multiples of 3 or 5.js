function solution(number){
  let sum = 0

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) sum += i
    else if (i % 5 === 0) sum += i
  }
  
  return sum
}

console.log(solution(10))