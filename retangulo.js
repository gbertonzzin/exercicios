"use strict"

$(document).ready(function() {
    $("#titulo").html("CALCULADORA DE RETANGULO")
    $("#descr").html("Calcula lado, perimetro e area de um retangulo")
    $("#parametros").prepend(`<input type="numbertext" id="lado" placeholder="Um lado"> <br>
                            <input type="number" id="diagonal" placeholder="A diagonal">`)
    $("#botao").click(function (){
        var lado = parseInt($('#lado').val())
        var diag = parseInt($('#diagonal').val())
        lado < diag ? calcular(lado, diag) : alert('O lado nao pode ser maior que a diagonal!');
    })
});


function calcular(l, d){
    let lX = Math.sqrt((d*d) - (l*l));
    let perimetro = ((l*2) + (lX*2));
    let area = (l * lX);
    $('body').append(`<p>O retangulo tem ${perimetro.toFixed(3)} de perimetro e ${area.toFixed(3)} de area.<br>
                    Seu outro lado tem ${lX.toFixed(3)} de comprimento.`)
    
};
