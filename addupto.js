"use strict"

//Esse exercício realiza a somatória de todos os números anteriores ao número fornecido.
//Até onde percebo, funciona direito, mas falta alguns aprimoramentos.

function adicionar(n) {
    var soma = n
    var i = 0
    var numero = window.par1;
    console.log('O número inicial é ', numero)
    for (i = 0; i < (numero - 1); i++) {
        n--;
        soma = (soma + n);
        console.log((i + 1),'° passo:', (soma - n), '+', n, '=', soma);
    }
    console.log('Resultado final:', soma)
}


$( document ).ready(function() {
    console.log( "DOCUMENT READY" );
    //$('#scriptsrc').change(function() {
    //    var src = $( "#scriptsrc option:selected" ).text()
    //   console.log(src)
    //   $(document.body).remove('#scriptid').append(´<script id="scriptid" type="text/javascript" src="${src}"></script>´);
    //});
    $("#parametros").html("Insira o número")
    $("#parametro1").attr("placeholder", "Número")
    $("#parametro2").hide();
    $("#botao").click(function (){
        window.par1 = parseInt($('#parametro1').val())
        console.log('CLICK');
        adicionar(window.par1);
    })
});