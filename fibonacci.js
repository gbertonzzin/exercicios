"use strict"

function fibonacci(lim){
    var fib = 1 // O fator inicial
    var n = 1
    var i = 1
    $('body').append('Limite:', lim)
        for (; 2*fib <= lim; i++){
        fib = fib + n;
        n = fib;
        $('body').append(`<p>${i}º Numero:${fib}</p>`)
    }
}


$( document ).ready(function() {
    console.log( "DOCUMENT READY" );
    //$('#scriptsrc').change(function() {
    //    var src = $( "#scriptsrc option:selected" ).text()
    //   console.log(src)
    //   $(document.body).remove('#scriptid').append(´<script id="scriptid" type="text/javascript" src="${src}"></script>´);
    //});
    $("#label").html("Insira o número")
    $('#parametros').append(`<input type="text" id="parametro1" placeholder="Insira o limite">`);
    $("#botao").click(function (){
        var limite = parseInt($('#parametro1').val())
        console.log('CLICK');
        fibonacci(limite);
    })
});