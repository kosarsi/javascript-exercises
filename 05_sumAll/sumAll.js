const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR"; 
    }
    return ((num1 + num2) / 2) * (Math.abs(num2 - num1) + 1); 
};

// Do not edit below this line
module.exports = sumAll;
