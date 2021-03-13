const {onlyLetterRegExp} = require('../regExp/regExps')

module.exports = extractWord = (str) => {
    const wordAsArray = str.match(onlyLetterRegExp) // Matches the word
    const word = wordAsArray === null ? str : wordAsArray[0];
    const rest = str.split(word); // get the surrounding quotes
    return [word, rest]
}