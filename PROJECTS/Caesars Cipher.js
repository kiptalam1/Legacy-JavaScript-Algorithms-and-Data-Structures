/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);
  
    // uppercase letters
    if (code >= 65 && code <= 97) {
      char = String.fromCharCode(((code - 65 + 13) % 26) + 65);
    } 

    // lowercase letters
    else if (code >= 97 && code <= 122) {
      char = String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    result += char;
  } 
  return result;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP
console.log(rot13("ADAMS"));
console.log(rot13("SERR YBIR?")); // FREE LOVE?
console.log(rot13("HELLO THERE"));
console.log(rot13("FREE CODE CAMP")); // SERR PBQR PNZC
