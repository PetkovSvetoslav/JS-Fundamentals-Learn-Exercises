function solve(input) {
    let dictionary = {};
    for (let index = 0; index < input.length; index++) {
      let el = JSON.parse(input[index]);
      let entry = Object.entries(el)[0];
        dictionary[entry[0]] = entry[1];
    }
    let sorted = {};
    for (const key of Object.keys(dictionary).sort((a,b) => a.localeCompare(b))) {
        sorted[key] = dictionary[key];
    }
   for (const key in sorted) {
       if (sorted.hasOwnProperty(key)) {
           const element = sorted[key];
           console.log(`Term: ${key} => Definition: ${element}`);
       }
   }
}