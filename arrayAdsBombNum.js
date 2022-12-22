function bomb(arr, bombs) {
    let output = arr.slice(0);
    while (output.includes(bombs[0])) {
        let bombindex = output.indexOf(bombs[0]);
let startindex = Math.max(bombindex-bombs[1],0);
output.splice(bombindex,bombs[1]+1);
output.splice(startindex,bombs[1]);

    }
    // return output.reduce((a, b) => {
    //     a += b;
    //     return a;
    // },0)
    // същото със цикъл
    let sum = 0;
    for (let index = 0; index < output.length; index++) {
       sum+=output[index]; 
    }
    return sum;
}