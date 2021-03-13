const {punctNumberRegExp} = require('../regExp/regExps')
const weave = require('./weave')

module.exports = weaveWords = (array1, array2, firstChar) => {
    if (punctNumberRegExp.test(firstChar) || firstChar === "'") return weave(array2, array1)
    return weave(array1, array2)
}