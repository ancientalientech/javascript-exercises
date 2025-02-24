const reverseString = function(str) {
    let chars = [];
    for (let i = str.length -1; i >= 0; i--) {
        chars.push(str[i]);
    }

    return chars.join('');
};

// Do not edit below this line
module.exports = reverseString;
