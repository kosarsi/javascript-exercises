const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b; 
};

const sum = function(arr) {
  let out = 0;
	for (let i = 0; i < arr.length; i++) {
    out += arr[i];
  }
  return out; 
};

const multiply = function(arr) {
  let out = 1;
  for (let i = 0; i < arr.length; i++) {
    out *= arr[i]; 
  }
  return out;
};

const power = function(a, b) {
	let out = 1;
  for (let i = 0; i < b; i++) {
    out *= a;
  }
  return out;
};

const factorial = function(a) {
	let out = 1;
  for (let i = 1; i <= a; i++) {
    out *= i; 
  }
  return out; 
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
