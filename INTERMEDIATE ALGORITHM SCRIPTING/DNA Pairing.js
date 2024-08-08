/*
DNA Pairing
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

// Method 1:
function pairElement(str) {
  const basePairs = {
    A:"T",
    T:"A",
    G:"C",
    C:"G"
  };
  let array = [];
  let splitStr = str.split(""); // split to create list 
  for (let i = 0; i < splitStr.length; i++) {
    let pair =  splitStr[i];
    array.push([pair, basePairs[pair]]);
  }
  return array;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));

//*********************************************************************************************************************************************************

// Method 2:

function pairElement(str) {
  const basePairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };
  return Array.from(str).map(char => ([char, basePairs[char]]));
}

console.log(pairElement("GCG"));

//*******************************************************************************************************************************************************

// Method 3:
function pairElement(str) {
  const basePairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };

  let array = [];
  for (let char of str) {
    array.push([char, basePairs[char]]);
  }
  return array;
}

console.log(pairElement("GCG"));// [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
