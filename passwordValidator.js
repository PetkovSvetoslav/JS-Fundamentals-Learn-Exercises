function passwordValidator(password) {
    
    function isValidPassLength(passLength) {
        let isValid = true;
        if(passLength < 6 || passLength > 10) {
            isValid = false;
        }
        return isValid;
    }
let isValidPassLengthValue = isValidPassLength(password.length);
if (!isValidPassLengthValue) {
    console.log("Password must be between 6 and 10 characters");
}
function isBetweenRange(ch, start, end) {
    return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0)
}
function whatContainsIn(password) {
    let isValid = true;
    for (let ch of password) {
    if (!(isBetweenRange(ch, 'A', 'Z') || 
    isBetweenRange(ch, 'a', 'z') ||
    isBetweenRange(ch, '0', '9')  )) {
      isValid = false;  
    }
    }
    return isValid;
}

let whatContains = whatContainsIn(password);
if (!whatContains) {
    console.log("Password must consist only of letters and digits");
}

}
passwordValidator('logIn')