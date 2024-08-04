/*
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/


// Method 1:
function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]/i;
  const consRegex = /^[^aeiou]+/i;
  if (vowelRegex.test(str)) {
    return str + 'way';
  } else {
    const removedLetter = str.match(consRegex)[0];
    str = str.replace(consRegex, "") + removedLetter + "ay";
    }
  return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("california"));





