const repeatString = function(str, num) {
    if(num<0) {
        return 'ERROR';
    }
    let finalString = '';
    for(let i=0;i<num;i++) {
        finalString += str;
    }
    return finalString;
};
/*repeatString('hey', 3);
repeatString('hello',10);
repeatString('hi', 1);
repeatString('bye', 0);*/
// Do not edit below this line
module.exports = repeatString;
