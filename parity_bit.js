"use strict"

var b = []

$(document).ready(function(){
    $('#titulo').html('BIT DE PARIDADE')
    $('#descr').html('Recebe um número de 0 a 31, <br>transforma em uma string binária <br>e checa o bit de paridade dessa string<br>')
    $('#parametros').append(`<input type="number" id="valor" min="0" max="31" placeholder="0-31"</input><br>`)

    $('#botao').click(function(){
        var valor = parseInt($('#valor').val())
        if (valor <= 31 && valor >= 0){
            b = valor.toString(2)
            paridade(b)
        }
        else {alert('Insira um número entre 0 e 31')}
    })
})

function paridade(s){
    var string = new Array()
    var t = 0;

    for (var i = 0; i < s.length; i++) {
        var d = parseInt(s.charAt(i));
        string[i] = d
        if (d == true) {t++}
        }
        var pbit = Number(t%2);
        $('body').append(`
            <p>O número inserido foi ${valor.value}, <br>
            que convertido em binário: ${b}, <br>
            num total de ${t} <i>true</i>, um número ${pbit == 1 ? 'ímpar (pbit = 1)' : 'par (pbit = 0)'}<br>
            Sendo o último bit ${string[string.length - 1]},<br>
            ${pbit == d ? 'o bit de paridade confere</p><br>' : 'o bit de paridade não confere!</p><br>'}}
            `)
}