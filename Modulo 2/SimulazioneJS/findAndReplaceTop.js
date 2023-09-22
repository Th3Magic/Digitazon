function founAndReplace(text, word, newWord) {
    let currentWord = '';
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        currentWord += text[i]
        if (text[i] == ' ') {
            newText += currentWord
            currentWord = ''
        }
        if (currentWord == word) {
            newText = newText + newWord
            currentWord = ''
        }
    }
    return newText + currentWord
}

console.log(founAndReplace("ciao sono gianni!", "gianni", "mario"))