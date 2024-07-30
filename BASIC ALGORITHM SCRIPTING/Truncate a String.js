function truncateString(str, num) {
  // check if the string is longer than the number given.
  if (str.length > num) {
  return `${str.slice(0, num)}...`; // if true, truncate the string and append "..."
  }
  else {
    // otherwise if not longer than num, return the original string.
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-", 1));
