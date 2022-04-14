// Convert number to reversed array of digits

function digitize(n) {
    return String(n).split('').reverse().map(num => Number(num));
}

// console.log(digitize(35231));


/* 
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
*/

/* 
function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
*/

/* 
function digitize(n) {
  //code here
  let numArr = [];
  
  while(n > 0){
    numArr.push(n % 10);
    
    n = Math.floor(n/10);
  }
  
  return numArr;
}
*/