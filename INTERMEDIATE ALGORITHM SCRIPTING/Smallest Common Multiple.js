/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.
*/

// find the gcd
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// find the lcm using the gcd
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// find the smallest common multiple for all numbers in the range of the array
function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let range = [];

  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let multiple = lcm(min, max);

  while (!range.every(num => multiple % num === 0)) {
    multiple += lcm(min, max)
  }
  return multiple;
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([1, 3]));
