// proxima melhoria
// sinalizar quando é o momento de atividade e quando é o momento de descanso com uma animação

var sec = 0
var min = 0

var contagem = 0
var series = ""
var seriesSec = ""
var seriesMin = ""
var temposec = 0
var tempogeral = 0
var tempoatual = 0
var minatual = 0
var contagemarredondada = 0

var interval

function padronizar(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}

function start() {
    timer()
    interval = setInterval(timer, 1000)
}

function pause() {
    clearInterval(interval)

}

function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    tempoatual = 0
    document.getElementById('timer').innerText = '00:00'
}

function timer() {

    if (tempoatual < tempogeral) {
        tempoatual = tempoatual + 1
        sec = sec + 1
        if (sec == 60) {
            min = min + 1
            sec = 0
        }
        if (tempoatual == tempogeral) {
            contagem = contagem + 1 / 2
            contagemarredondada = Math.round(contagem)
            console.log('Contagem ' + contagem)
            console.log('Contagem arredondada ' + contagemarredondada)
            stop()
            start()
        }
        if (contagem == series) {
            stop()
        }
        console.log("tempo atual " + tempoatual)
        document.getElementById('timer').innerText = padronizar(min) + ':' + padronizar(sec)
        document.getElementById('cont').innerText = contagemarredondada
    }
}

function iniciar() {
    series = document.getElementById('series').value;
    seriesMin = document.getElementById('tempoMin').value;
    seriesSec = document.getElementById('tempoSec').value;

    temposec = seriesMin * 60
    tempogeral = temposec + parseInt(seriesSec)
    console.log("Tempo geral " + tempogeral)
    console.log('series ' + series)
    start()
}