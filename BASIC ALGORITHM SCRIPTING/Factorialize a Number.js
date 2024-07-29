// using recursive method:
function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num-1);
  }
}
console.log(factorialize(5));



// iterative method 1) using for loop
function factorialize(num) {
  let ans = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = 2; i <= num; i++){
    ans = ans * i;
  }
  return ans;
}
console.log(factorialize(5));



// iterative method: 2) using while loop
function factorialize(num) {
  let factorial = 1;
  while (num > 0) {
    factorial *= num;
    num--
  }

  return factorial;
}
console.log(factorialize(5));

