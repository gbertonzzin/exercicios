"use strict"

//Esse exercício realiza a somatória de todos os números anteriores ao número fornecido.
//Até onde percebo, funciona direito, mas falta alguns aprimoramentos.

$( document ).ready(function() {
    $("#parametros").append(`<input type="number" id="numero" placeholder="numero"> <br>`)
    $("#botao").click(function (){
        var par1 = parseInt($('#numero').val())
        somatoria(par1);
    })
});

function somatoria(n) {
    var soma = n
    var i = 0
    var numero = n;
    for (i = 0; i < (numero - 1); i++) {
        n--;
        soma = (soma + n);
        $('body').append(`<p>${i + 1}° passo: ${soma - n} + ${n} = ${soma}<p>`);
    }
    $('body').append(`<p>Resultado final: ${soma}<p>`)
}
