function palindroms(params) {
  function ispalindroms(text) {
      let len = text.length;
      let isPalindrom = true;
      for (let index = 0; index < Math.floor(len/2); index++) {
        if (text[index] !== text[len -1 -index]) {
            isPalindrom = false;
            break;
        }  
      }
      return isPalindrom;
  }
//   console.log(ispalindroms(12321));
for (let iterator of params) {
    console.log(ispalindroms(iterator.toString()));
}
}
palindroms([123, 323, 421, 121])