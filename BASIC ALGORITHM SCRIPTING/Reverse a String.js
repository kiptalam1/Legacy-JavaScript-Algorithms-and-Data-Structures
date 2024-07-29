// using .split(), .reverse(), .join("")
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));



// using ...spread operator, .reverse(), and .join()
function reverseString(str) {
  const strRev = [...str].reverse().join("");
  return strRev;
}
console.log(reverseString("hello"));



// using Array.from(), .reverse() and .join()
function reverseString(str) {
  const strRev = Array.from(str).reverse().join("");
  return strRev;
}
console.log(reverseString("hello"));



// using for loop
function reverseString(str) {
  let strRev = "";
  for (let i = str.length-1; i >= 0; i-- ) {
    strRev += str[i]
  }
  return strRev;
}
console.log(reverseString("hello"));
