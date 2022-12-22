function solve(integers, commands) {

    function add(arr, token){
        arr.splice(+token[0],0,token[1]);
return arr;
    }

    function addMany(arr, token){
        // arr.splice(+token[0],0, +token[1]);
        // vtori variant 
        let index = +token.shift();
        for (let value  of token) {
            arr.splice(index++, 0, value);
        }
return arr;
    }

function remove(arr, token) {
    arr.splice(Number(token[0]),1);
    return arr;
}

function shift (arr, token){
    let f = Number(token[0]);
while (f > 0) {
    let el = arr.shift();
    arr.push(el);
    // namalqme poziciqta
    f--;
}
return arr;
}
function sumPairs (arr){
let output = [];
while (arr.length > 0) {
    let a = arr.shift() || 0;
    let b = arr.shift() || 0;
    output.push(a + b);
}
return output;
}
    let currcommands = commands.shift();
    while (currcommands !== 'print') {
        let tokens = currcommands.split(' ');
        switch (tokens.shift()) {
            case 'add':
                integers = add(integers, commands);
                break;
            case 'addMany':
                integers = addMany(integers, commands);
                break;
            case 'contains':
                console.log(integers.indexOf(Number(tokens[0])));
                break;
            case 'remove':
                integers = remove(integers, commands);
                break;
            case 'shift':
                integers = shift(integers, commands);
                break;
            case 'sumPairs':
                integers = sumPairs(integers);
                break;
        }
     currcommands = commands.shift();   
    }
return `[ ${integers.join(', ')} ]`;
}