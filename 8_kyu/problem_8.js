// Sum Arrays

function sum (numbers) {
    if(numbers.length === 0){
      return 0;
    }
   else{
      let total = 0;
      for(let i = 0; i < numbers.length; i++){
          total = total + numbers[i];
      }
      return total;
   }
  }



/* function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  } */
