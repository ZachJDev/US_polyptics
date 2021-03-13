const {preVerbRegExp} = require('../regExp/regExps')
// judges whether or not a word suggests that a following word is a noun or not.
// Converts an undefined value to a bool when prevWord doesn't exist.
module.exports = isProbablyNotANoun = (prevWord) => {
    return !!prevWord ? preVerbRegExp.test(prevWord) : false;
}