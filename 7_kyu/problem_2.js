//function filter_list(l) {

function filter_list(arrList) {
    const arr = [];
    for (let i = 0; i < arrList.length; i++) {
        if (typeof arrList[i] !== 'string') {
            const el = arrList[i];
            arr.push(el);
        }
    }
    return arr;
}



/* function filter_list(l){
    return l.filter(ls => typeof ls == 'number')
} */
// console.log(filter_list([1, "a", "b", 0, 15]));


/* 
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
*/


/* 
function filter_list(arrList) {
    const arr = [];
    for (let i = 0; i < arrList.length; i++) {
        if (typeof arrList[i] == 'number') {
            const el = arrList[i];
            arr.push(el);
        }
    }
    return arr;
}
console.log(filter_list([1, "a", "b", 0, 15]));
*/






// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

