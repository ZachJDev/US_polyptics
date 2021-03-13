const fs = require('fs');
const path = require('path');

let NOUN_LIST = fs.readFileSync(path.join(__dirname, 'nounlist.txt')).toString().split('\n')

module.exports = switchIfInList = (word, shiftVal) => {
    const index = NOUN_LIST.indexOf(word);
    if (index > -1) {
        return NOUN_LIST[(index + shiftVal) % NOUN_LIST.length] // mods the value to essentially wrap around the list when shiftVal + index is greater than list length.
    }
    return word
}
