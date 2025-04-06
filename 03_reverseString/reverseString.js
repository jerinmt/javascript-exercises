const reverseString = function(str) {
    const tempArray = [];
    let finalString = '';
    for(let i=0;i<str.length;i++) {
        tempArray[i] = str[i];
    }
    for(let i=str.length-1;i>=0;i--) {
        finalString += tempArray[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
