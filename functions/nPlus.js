const {punctNumberRegExp, wordRegExp} = require('../regExp/regExps')
const getNewNouns = require('./getNewNouns')

module.exports = nPlus = (string, shift) => {
    const queryString = string.replace("@", "at") // Get string to transform
    const shiftVal = Number.isInteger(Number(shift)) ? Number(shift) : 7

    const words = queryString.split(' ')

    // Call the getNewNoun function on all the words.
    const newWords = words.map((str, i) => getNewNouns(str, words[i - 1], shiftVal));

    // Pull out the punctuation and numbers and stuff.
    const initialOther = queryString.match(punctNumberRegExp) || [];
    const other = initialOther.map(val => val.replace("'", '').replace('"', ''));

    // Weave words together for final string. Order based on the first character of the initial string.
    return newWords.join(' ')
}
