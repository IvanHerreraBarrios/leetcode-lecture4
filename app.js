var detectCapitalUse = function(word) {
    let may = 0, min = 0, length = word.length
    for (let i = 0; i < length; i++){
        word[i] === word[i].toUpperCase() ? may++ : min++
    }

    if (may === word.length || min === length) return true

    if (word[0] === word[0].toUpperCase() && min === length - 1) return true

    return false
};