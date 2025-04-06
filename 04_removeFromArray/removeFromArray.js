const removeFromArray = function(arr, ...args) {
    const resultArray = [];
    let flag=true;
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<args.length;j++) {
            if(arr[i]===args[j]) {
                flag=false;   
            }
        }
        if(flag) {
            resultArray.push(arr[i]);
        }
        flag=true;
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
