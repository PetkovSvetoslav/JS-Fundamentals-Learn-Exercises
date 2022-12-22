function charInRange(start, end) {
    let startVelue = start.charCodeAt(0);
    let endVelue = end.charCodeAt(0);
    if (startVelue > endVelue) {
        let temp = startVelue;
        startVelue = endVelue;
        endVelue = temp;
    }
    let res = '';
for (let index = startVelue + 1; index < endVelue; index++) {
    // console.log(String.fromCharCode(i));
  res += String.fromCharCode(index) + ' ';
}
console.log(res);
}
charInRange('a', 'd')