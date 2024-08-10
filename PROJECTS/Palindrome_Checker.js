/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  // convert to same case
  str = str.toLowerCase();
  const regex = /[\W_]/g;
  // replace non-alphanumeric-characters with nothing
  str = str.replace(regex, "");
  // check if the reverse of the string is same as the original string
  if (str.split("").reverse().join("") !== str) {
    return false
  }
  return true;
}

console.log(palindrome("eye")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // true
