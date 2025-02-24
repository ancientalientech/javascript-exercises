const removeFromArray = function(arr, ...params) {
    for (let i = 0; i < params.length; i++) {
        arr = arr.filter(val => val !== params[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
