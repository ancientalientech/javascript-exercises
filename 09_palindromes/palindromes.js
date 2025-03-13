const palindromes = function (word) {
    word = word.toLowerCase();
    let testWord = "";

    for(let i = 0; i < word.length; i++) {
        if (('a' <= word[i] && word[i] <= 'z') || ('0' <= word[i] && word[i] <= '9'))
            testWord += word[i];
    }

    const halfWayIndex = Math.floor(testWord.length / 2);

    for(let i = 0, j = testWord.length - 1; i < halfWayIndex; i++, j--) {
        if(testWord[i] !== testWord[j]) {
            return false;
        }
    }
    return true;
};

//palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
