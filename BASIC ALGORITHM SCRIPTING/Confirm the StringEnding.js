function confirmEnding(str, target) {
  // Get the substring from the end of str with the same length as target
  const endOfStr = str.slice(-target.length);
  // Compare the end of the string with the target
  return endOfStr === target;
}

console.log(confirmEnding("Bastian", "n")); // Output: true
console.log(confirmEnding("Connor", "n")); // Output: false
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "sage"));



/*
  function confirmEnding(str, target) {
    const regex = `${target}$`;
    return str.match(regex) !== null;  
  
  }
  
  console.log(confirmEnding("Bastian", "n"));
*/


// endsWith() is also very useful here
