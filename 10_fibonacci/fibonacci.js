const fibonacci = function(x) {
    if (!isNaN(x)) {
        x = Number(x); 
        if (x < 0) {
            return "OOPS"; 
        }
        if (x === 1 || x === 0) {
            return x; 
        } else {
            let nums = [0, 1];
            for (let i = 2; i <= x; i++) {
                nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
            }
            return nums[nums.length - 1]; 
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
