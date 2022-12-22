let num = [1, 2, 3, 4];
num.push(0);
num.unshift(9);
console.log(num);
// num.shift();
// взима елемента на първия индекс
let first = num.shift();
console.log(num);
console.log(first);
// взима елемента на последния индекс
// let lastElement = num.pop();
// console.log(lastElement);
function poop(num) {
    // if (!Array.isArray(num)) {
    //     return;
    // }
    let lastElement = num[num.length-1];
     num.length = num.length - 1;
     return lastElement;
    // let res = [];
    // for (let index = 0; index < num.length - 1; index++) {
    //    res = num[index];
    // }
    // return res; 
}
let result = poop(num);
console.log(num);
console.log(result);