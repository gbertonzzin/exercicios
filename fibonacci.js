"use strict"

$( document ).ready(function() {
    $('#descr').html("Fornece a sequência de Fibonacci, dado um limite de até um bilhão.")
    $('#titulo').html('Fibonacci')
    $('#parametros').append(`
        <div class="col-xs-4">
            <label for="valor">Limite: </label>
            <input type="number" class="form-control" id="valor" min="1" max="1000000000" placeholder="Insira o limite">
        </div>`);
    $("#botao").click(function (){
        var limite = parseInt($('#valor').val())
        if (limite <= 1000000000 && limite >= 1){fibonacci(limite)} 
        else {alert('Insira um número entre 1 e 1.000.000.000')}
    })
});

function fibonacci(lim){
    var result = [0, 1];
    $('#resultados' ).empty(); // Esvazia resultados anteriores
    $('#resultados').append('Limite:', lim)
    for (var i = 2; (result[i - 2] + result[i - 1])-1 < lim; i++){ // Estabelece o limite
            result[i] = result[i - 2] + result[i - 1]
        $('#resultados').append(`<p>${i-1}º Numero:${result[i]}</p><br>`) // Mostra os resultados
    }
}
