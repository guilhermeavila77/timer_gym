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
    document.getElementById('timer').innerText = '00:00'

}

function timer() {
    for (var contagem = 0; contagem <= parseInt(series); contagem++) {
        for (var tempoatual = 0; tempoatual < tempogeral; tempoatual++) {
            sec = sec + 1
            if (sec == 60) {
                min = min + 1
                sec = 0
            }
            console.log("tempo atual " + tempoatual)
            document.getElementById('timer').innerText = padronizar(min) + ':' + padronizar(sec)
        }
        console.log('Contagem ' + contagem)
        document.getElementById('cont').innerText = contagem
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