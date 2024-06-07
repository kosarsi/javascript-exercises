const palindromes = function (word) {
    newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (/[a-zA-Z0-9]/.test(word.charAt(i))) {
            newWord += word.charAt(i).toLowerCase(); 
        }
    }
    backwards = "";
    for (let i = newWord.length - 1; i >= 0; i--) {
        backwards += newWord.charAt(i);
    }
    return backwards === newWord; 
};

// Do not edit below this line
module.exports = palindromes;
