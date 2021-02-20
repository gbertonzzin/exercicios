"use strict"

var a, b, c, d, e, f, p;


$(document).ready(function(){
    $('#titulo').html('Calculadora de trocado')
    $('#descr').html('Calcula a possibilidade de pagar por um item, <br>dadas as moedas do trocado no seu bolso')
    $('#parametros').append(`
        <ul><li><input type="number" id="real" placeholder="Moedas de 1 real"> </li>
        <li><input type="number" id="cinquenta" placeholder="Moedas de cinquenta centavos"> </li>
        <li><input type="number" id="vintecinco" placeholder="Moedas de vinte e cinco centavos"</li>
        <li><input type="number" id="dez" placeholder="Moedas de dez centavos" > </li>
        <li><input type="number" id="cinco" placeholder="Moedas de cinco centavos" > </li>
        <li><input type="number" id="centavo" placeholder="Moedas de um centavo" > </li>
        <li><input type="text" id="preco" placeholder="Valor da compra" </li></ul>`)
    $('#botao').click(function(){
        a = parseInt($('#real').val())
        b = 0.5 * parseInt($('#cinquenta').val())
        c = 0.25 * parseInt($('#vintecinco').val())
        d = 0.1 * parseInt($('#dez').val())
        e = 0.05 * parseInt($('#cinco').val())
        f = 0.01 * parseInt($('#centavo').val())
        p = parseFloat($('#preco').val()).toFixed(2)
        troco(a, b, c, d, e, f, p)
    })

})

function troco(a, b, c, d, e, f, p){
    console.log(a, b, c, d, e, f, p)
    var grana = (a + b + c + d + e + f).toFixed(2)
    console.log(grana, p)
    if (grana >= p) {
        console.log('da pra pagar')
    } 
    else {
        console.log('nao da pra pagar')
    }

}