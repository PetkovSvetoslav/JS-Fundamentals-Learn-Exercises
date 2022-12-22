function solve(input) {
    let wagons = input.shift().split(" ").map(f => Number(f));
    let maxCap = Number(input.shift());

    for (let index = 0; index < input.length; index++) {
        let command = input[index].split(" ");
        if (command.length === 2) {
            wagons.push(+command[1]);
        } else if (command.length === 1) {
let passengersToAdd = Number(command[0]);

let firstIndex = false;
wagons = wagons.map(
    x => {
        if (passengersToAdd + x <= maxCap && firstIndex === false){
return x += passengersToAdd;
firstIndex = true;
return x;
        }
        return x ;
    }
)
// 2 variant vmesto map
// for (let j = 0; j < wagons.length; j++) {
//     if (passengersToAdd + wagons[j] <= maxCap){
//         wagons[j] += passengersToAdd;
//         break;
//     }
    
// }
        }
    }
    return wagons.join(" ");
}
console.log(solve(
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'));