import Countdown from './countdown.js'

const tempoParaNatal = new Countdown('25 December 2024 23:58:55 GMT-0300');

console.log(tempoParaNatal.total)

const AnoNovo = new Countdown('31 December 2024 23:58:55 GMT-0300');

setInterval(() => {
    console.log(AnoNovo.total)
}, 1000)