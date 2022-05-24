// When writing on Twitter, Jaden Smith is known for almost always capitalizing every word.
// Your task is to convert strings to how they would be written by Jaden Smith.

String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
 };

// Test
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase("How can mirrors be real if our eyes aren't real"))