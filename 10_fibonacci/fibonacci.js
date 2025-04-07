const fibonacci = function(num) {
    let temp=0;
    let result=0,num2=1;
    num = num * 1;
    if(num<0) {
        return 'OOPS';
    }
    for(let i=1;i<=num;i++) {
        temp = result+num2;
        result=num2;
        num2=temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
