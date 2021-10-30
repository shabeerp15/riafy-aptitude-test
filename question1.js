var fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    var words = data.split(/\s+/)
    var wordCount = {}
    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    }
    console.log(wordCount)
})