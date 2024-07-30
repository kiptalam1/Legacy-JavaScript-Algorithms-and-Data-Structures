function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  for (let i = 0; i < num; i++){
    if (num <= 0) {
      return ""
    } else {
    repeatedStr += str;
    }
  }
  return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("*", 8));
