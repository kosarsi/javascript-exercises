const removeFromArray = function(array, ...removed) {
    for (let num of removed) {
        let index = array.indexOf(num);
        while (true) {
            if (index == -1) {
                break;
            }
            array.splice(index, 1); 
            index = array.indexOf(num); 
        }
    }
    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
