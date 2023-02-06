const fs = require('fs')
const readline = require('readline')

const readStream = fs.createReadStream('access_tmp.log.txt')
const writeStream1 = fs.createWriteStream('./89.123.1.41.log', 'utf-8')
const writeStream2 = fs.createWriteStream('./34.48.240.111.log', 'utf-8')
const rl = readline.createInterface({
    input: readStream
})

rl.on('line', (input) => {

    const regExp1 = /89.123.1.41/g;
    const regExp2 = /34.48.240.111/g;
    const res1 = regExp1.test(input)
    const res2 = regExp2.test(input)
    if (res1) {
        writeStream1.write(input)
        writeStream1.write('\n')
    }
    if (res2) {
        writeStream2.write(input)
        writeStream2.write('\n')
    }
    rl.close()
})