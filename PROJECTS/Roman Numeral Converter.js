/* Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
--------------
| M  |	1000 |
--------------
| CM |  900  |
--------------
| D	 |  500  |
--------------
| CD |  400  |
--------------
| C	 |  100  |
--------------
| XC |  90   |
--------------
| L	 |  50   |
--------------
| XL |  40   |
--------------
| X	 |  10   |
--------------
| IX |  9    |
--------------
| V	 |  5    |
--------------
| IV |  4    |
--------------
| I	 |  1    |
--------------

All roman numerals answers should be provided in upper-case.
*/
  
function convertToRoman(num) {
const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    let roman = "";
    
    romanNumerals.forEach((item) => {
        while (num >= item.value) {
            roman += item.symbol;
            num -= item.value;
        }
    });
    return roman;
}

console.log(convertToRoman(36)); // XXXVI
console.log(convertToRoman(2)); // II
console.log(convertToRoman(68)); // LXVIII
console.log(convertToRoman(798)); // DCCXCVIII
