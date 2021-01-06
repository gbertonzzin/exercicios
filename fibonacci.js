"use strict"

//Esse exercício ainda não respeita estritamente o limite, ele só pára de calcular quando ultrapassa o limite.
//A rigor, ele finaliza com o próximo número após o limite.
//ex: limite é 32, ele retorna 64; limite é 31, ele retorna 32
//Ainda conserto isso, tá fácil.

function fibonacci(lim){
    var fib = 1 
    var n = 1
    var i = 0
        for (i = 0; n < lim; i++){
        fib = fib + n;
        n = fib;
        console.log(fib)
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
    $("#parametro1").attr("placeholder", "Número")
    $("#parametro2").hide();
    $("#botao").click(function (){
        var limite = parseInt($('#parametro1').val())
        console.log('CLICK');
        fibonacci(limite);
    })
});