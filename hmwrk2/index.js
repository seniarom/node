const events = require('events')
const myEmit = new events.EventEmitter()

function upDateTimer(arg, i) {
    const dateYear = Number(arg.split('-')[3])
    const dateMonth = Number(arg.split('-')[2]) - 1
    const dateDay = Number(arg.split('-')[1])
    const dateHour = Number(arg.split('-')[0])

    const dateInSec = Date.parse(new Date(dateYear, dateMonth, dateDay, dateHour, 00, 00))
    const todayInSec = Date.now()

    const diff = dateInSec - todayInSec

    if (diff <= 0) {
        myEmit.removeListener('start' + i, upDateTimer)
        console.log('Timer is up')
        return
    }
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    const y = years;
    const d = days - years * 365;
    const h = hours - days * 24;
    const m = mins - hours * 60;
    const s = secs - mins * 60;
    console.log(y + ' years ' + d + ' days ' + h + ' hours ' + m + ' minutes ' + s + ' seconds left')
}
for (let i = 0; i < process.argv.length - 2; i++) {
    myEmit.on('start' + i, upDateTimer)
}

setInterval(function () {
    for (let i = 0; i < process.argv.length - 2; i++) {
        myEmit.emit('start' + i, process.argv[2 + i], i)
    }
}, 1000)
