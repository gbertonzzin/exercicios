"use strict"

$(document).ready(function() {
    $("#titulo").html("CALCULADORA DE PARALELEPIPEDO")
    $("#descr").html("Calcula a diagonal de um paralelepipedo retangulo")
    $("#parametros").prepend(`<input type="number" id="lado_a" placeholder="Lado A"> <br>
                            <input type="number" id="lado_b" placeholder="Lado B"> <br>
                            <input type="number" id="lado_c" placeholder="Lado C" <br>`)
    $("#botao").click(function (){
        var ladoa = parseInt($('#lado_a').val())
        var ladob = parseInt($('#lado_b').val())
        var ladoc = parseInt($("#lado_c").val())
        paralelepipedo(ladoa, ladob, ladoc);
    })
});


function paralelepipedo(la, lb, lc){
    let lX = Math.sqrt((d*d) - (l*l));
    let perimetro = ((l*2) + (lX*2));
    let area = (l * lX);
    $('body').append(`<p>O retangulo tem ${perimetro.toFixed(3)} de perimetro e ${area.toFixed(3)} de area.<br>
                    Seu outro lado tem ${lX.toFixed(3)} de comprimento.`)
    
};
