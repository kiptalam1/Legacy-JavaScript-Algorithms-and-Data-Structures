/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/


function sumFibs(num) {
  let fibonacciNumbers = [];
  let a = 0, b = 1;

  while (a <= num) {
    fibonacciNumbers.push(a);
    [a, b] = [b, a + b];
  }

  let sum = fibonacciNumbers
            .filter(n => n % 2 !== 0)
            .reduce((sum, n) => sum + n, 0);
  return sum;
}

console.log(sumFibs(4));
console.log(sumFibs(4000000));
console.log(sumFibs(-12));
