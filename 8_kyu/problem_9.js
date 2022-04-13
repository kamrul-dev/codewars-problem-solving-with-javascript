function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    else {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
            var average = total / array.length;
        }
        return average;
    }
}
console.log(find_average([1, 1, 1]));



/* 
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
*/

/*   
function find_average(array) {
    if(array.length === 0){
      return 0;
    }
    else{
      let total = 0;
      for(let arr of array ){
        total += arr;
        var average = total/array.length;
      }
      return average;
    }
  }
  console.log(find_average([1, 1, 1])); */

/*
 
function find_average(array) {
if (array.length === 0) {
return 0;
}
var result = 0;
for (i=0; i<array.length; i++) {
  result +=array[i];
}
return result/array.length;
}
*/