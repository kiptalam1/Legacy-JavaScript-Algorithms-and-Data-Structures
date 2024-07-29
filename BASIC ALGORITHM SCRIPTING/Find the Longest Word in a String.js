function findLongestWordLength(str) {
  // convert the string into an array.
  let words = str.split(" ");
  // Declare an initial maximum length variable to 0.
  let maxLength = 0;
  // Iterate over every word in the words array.
  for (const word of words) {
    // check whether length of the word is greater than the initial maxLength.
    if (word.length > maxLength)
      // if true, replace the length of the word with the new max length.
    maxLength = word.length;
  } 
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/*
method 2: using reduce():

function findLongestWordLength(str) {
  return str.split(' ').reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/
