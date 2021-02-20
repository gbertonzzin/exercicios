"use strict"

var n = 0
var m = 0
var result = []

$(document).ready(function(){
    $('#titulo').html('Sequencia de múltiplos')
    $('#descr').html('Retorna <i>m</i> múltiplos de <i>n</i>')
    $('#parametros').append(`
        <input type="number" id="valor" min="1" max="99" placeholder="n 1-99"</input><br>
        <input type="number" id="valor2" min="1" max="50" placeholder="m 0-50"</input><br>`)
        $('#botao').click(function(){
            n = parseInt($('#valor').val())
            m = parseInt($('#valor2').val())
            multiplos(n, m)
        })
})

function multiplos (n, m){
    let i = 0
    for (i = 0; i < m; i++){
        var x = n * (i+1)
        result[i] = x
    }
    $('body').append(`<p>Os ${m} múltiplos de ${n} são ${result}</p><br>`)
    result = []
}