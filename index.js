import colors from 'colors'

let resArr = []
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

if (isNaN(a) || isNaN(b)) {
    console.error('Wrong type')
    process.exit(1)
}

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return num > 1
}
const primeNumbers = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            resArr.push(i)
        }
    }
}
primeNumbers(a, b)
if (resArr.length == 0) {
    console.log(colors.red('There are no prime numbers'))
}
for (let i = 0; i < resArr.length; i++) {
    if (i % 3 == 2) {
        console.log(colors.red(resArr[i]))
    } else if (i % 3 == 0) {
        console.log(colors.green(resArr[i]))
    } else if (i % 3 == 1) {
        console.log(colors.yellow(resArr[i]))
    }
}