const palindromes = function (str) {
    let result=true;
    let compString = '';
    for(let i=0;i<str.length;i++) {
        if((str.at(i)>='A'&&str.at(i)<='Z')||(str.at(i)>='a'&&str.at(i)<='z')||(str.at(i)>='0'&&str.at(i)<='9')) {
            compString += str.at(i);
        }
    }
    compString = compString.toLowerCase();
    for(let i=0;i<str.length;i++) {
        if(compString.at(i)==compString.at(-(i+1))) {
            result=true;
        }
        else {
            return false;
        }
    }
    return result;
};
// Do not edit below this line
module.exports = palindromes;
