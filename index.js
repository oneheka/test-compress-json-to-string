const fs = require('fs');

module.exports.random = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports.arr = (size, max = 300, min = 1) => {
    return new Array(size).fill(null).map(() => random(max, min))
}

module.exports.test = (arr) => {
    fs.writeFileSync('./file.json', JSON.stringify(arr, null, '\t'))
    fs.writeFileSync('./file.txt', Buffer.from(arr).toString('base64'))

    const json = fs.statSync('file.json').size
    const txt = fs.statSync('file.txt').size
    
    console.log(
        `JSON: ${json}`
    )
    console.log(
        `TXT: ${txt}`
    )
    console.log(
        `TOTAL: ${json-txt}`
    )
    console.log(
        `COMPRESS: ${(100-(txt / json * 100)).toFixed(2)}%`
    )
    
    //const decode = fs.readFileSync('./file.json', 'utf-8')
    //console.log(JSON.parse(decode)) если че оно воркает, просто чтоб консоль не была грязной
}