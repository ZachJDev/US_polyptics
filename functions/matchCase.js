module.exports = matchCase = (oldWord, newWord) => {
    const oldWord2 = oldWord.charCodeAt(1)
    const oldWord1 = oldWord.charCodeAt(0)
    // I assume that if the second letter is capitalized, then the entire word is capitalized.
    // Certainly not comprehensive (but how do you copy exact capitalization for words of different lengths?)
    if (oldWord2 >= 65 && oldWord2 <= 90) return newWord.toUpperCase()
    if (oldWord1 >= 65 && oldWord1 <= 90) return newWord[0].toUpperCase() + newWord.substring(1); // First letter capitalized, but not the rest.
    return newWord.toLowerCase();
}