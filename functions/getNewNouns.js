const extractWord = require("./extractWord")
const switchIfInList = require('./switchIfInList')
const isProbablyNotANoun = require('./isProbablyNotANoun')
const weaveWords = require('./weaveWords')
const matchCase = require('./matchCase')
const {httpRegExp} = require('../regExp/regExps')

module.exports = getNewNoun = (str, prevWord, shiftVal) => {
    if(httpRegExp.test(str)) return '';
    let [word, surrounding] = extractWord(str) // extract the word from any surrounding quotation marks.
    let finalWord = switchIfInList(word.toLowerCase(), shiftVal) // returns a new noun (if in the list) or the word itself.
    finalWord = isProbablyNotANoun(prevWord) ? word : finalWord // Reverts finalWord to the original word if it's probably not a noun.
    return weaveWords([matchCase(word, finalWord)], surrounding, str[0]) // weave the word  and any surrounding quotes and push it to the array.
}