let count = 0;

function cc(card) {
  
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count = count + 1;
    break;
  case 7:
  case 8:
  case 9:
    count = count;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count = count - 1;
    
} if (count > 0) {
    return count + " Bet"
    } else {
      return count + " Hold"
    }

}

console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K')); 
console.log(cc('A'));
