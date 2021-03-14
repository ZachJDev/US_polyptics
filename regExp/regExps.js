module.exports = {
    wordRegExp: new RegExp(/[A-Za-z'\s.]+[^\W0-9]*/g), // matches words and spaces.
    onlyLetterRegExp: new RegExp(/[A-Za-z]+/g),
    punctNumberRegExp: new RegExp(/(\W*[0-9]*)+[^A-Za-z\s'.]/g), // Should match symbols and numbers
// Test for words before ambiguous words to determine if it's a noun. Wrapped with start/end catchers to avoid false positives.
    preVerbRegExp:
        new RegExp(/[\W\s\n]*(I|am|have|he|she|it|you|was|not|don't|won't|can't|to|I'm|are|should|could|would|were)\b[\W\s]*/i),
    httpRegExp: new RegExp(/https?/)
}