const repeatString = function(word, numberOfRepeat) {
    let repeatedString = "";
    if (numberOfRepeat < 0) {
        return "ERROR";
    }
    else {
    for (let i = 0; i < numberOfRepeat; i++) {
    repeatedString += word;
    }
    return(repeatedString);
}
};

console.log(repeatString);

// Do not edit below this line
module.exports = repeatString;
