function solve(input) {
    let output = [];
for (let index = 0; index < input.length; index++) {
    if (!output.includes(input[index])) {
        output.push(input[index]);
    } 
}
return output.join(" ");
}
console.log(solve([20, 8, 12, 13, 4, 4, 8, 5]));