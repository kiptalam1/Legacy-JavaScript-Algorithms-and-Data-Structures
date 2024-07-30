/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  let splitStr = str.split(" ")
  let titleCaseStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    let word = splitStr[i];
    let capital = word[0].toUpperCase() + word.slice(1).toLowerCase();
    titleCaseStr += capital + (i < splitStr.length - 1 ? " ": "");
    //titleCaseStr += capital + " ";   
  }
return titleCaseStr;
//return titleCaseStr.trim()
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
