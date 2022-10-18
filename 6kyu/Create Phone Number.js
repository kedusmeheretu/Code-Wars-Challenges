function createPhoneNumber (numbers) {
  let phNumber = '(';
  phNumber += numbers.splice(0,3).join('')
  phNumber += ') ';
  phNumber += numbers.splice(0,3).join('')
  phNumber += ' - ';
  phNumber += numbers.splice(0,4).join('')
  return phNumber;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))