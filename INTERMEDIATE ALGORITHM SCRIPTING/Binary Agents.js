/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  // Remove spaces from the binary string
  str = str.replace(/\s+/g, "");
  // Split the binary string into chunks of 8 bits
  const byteArray = str.match(/.{1,8}/g);
  // Convert each byte to its ASCII character 
  const characters = byteArray.map(byte => String.fromCharCode(parseInt(byte, 2)))
  // Combine the characters into a single string
  return characters.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 
                        01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); // output: Aren't bonfires fun!?
