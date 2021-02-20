"use strict"

var ladoa, ladob, ladoc;

$(document).ready(function() {
    $("#titulo").html("CALCULADORA DE PARALELEPIPEDO")
    $("#descr").html("Calcula a diagonal, área das faces e volume de um paralelepipedo retangulo")
    $("#parametros").prepend(`
        <input type="number" id="lado_a" placeholder="Lado A"> <br>
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
    var d = Math.sqrt(la**2 + lb**2 + lc**2)
    var a = ((la * lb) * 2) + ((lb * lc) * 2) + ((la * lc) * 2)
    var v = (la * lb) * lc
    $('body').append(`
            <p>A diagonal de um parelelepípedo de dimensões ${la}, ${lb}, ${lc} é ${d.toFixed(2)}<br>
            a área de suas faces é ${a.toFixed(2)} e seu volume é ${v.toFixed(2)}</p><br>
            `)
};
