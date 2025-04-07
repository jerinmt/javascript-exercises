const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
  let total=0;
	for(let i=0;i<arr.length;i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let total=arr[0];
  for(let i=1;i<arr.length;i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
	let result = 1;
  for(let i=0; i<num2;i++) {
    result *= num1;
  }
  return result;
};

const factorial = function(num1) {
	let factorial=1;
  if(num1!=0) {
    for(let i=1;i<=num1;i++) {
      factorial *= i;
    }
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
