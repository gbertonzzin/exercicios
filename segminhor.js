"use strict"

var uString = " ";


$(document).ready(function(){
    $("#titulo").html("CALCULADORA DE UNIDADES DE TEMPO")
    $("#descr").html("Transforma segundos, minutos e horas entre si")
    $("#parametros").append(`
        <input type="number" id="valor" min="1" max="999" placeholder="1-999"</input><br/>
        <select id="unidade">
        <option value="S">Segundos</option>
        <option value="M">Minutos</option>
        <option value="H">Horas</option>
        </select>`);
    $("#botao").click(function() {
        var unidade = $("#unidade").val()
        var valor = parseInt($("#valor").val())
        console.log(unidade, valor)
        segminhor(valor, unidade)
    });
});

function segminhor(n, u){
    var seg = 0;
    var min = 0;
    var hor = 0;
    if (u === "H") {
        uString = "hora"
        hor = n;
        min = n * 60;
        seg = n * 60 * 60;
    }
    else if (u === "M"){
        uString = "minuto"
        hor = n / 60;
        min = n;
        seg = n * 60;
    }
    else if (u === "S"){
        uString = "segundo";
        hor = n / 60 / 60;
        min = n / 60;
        seg = n;
    }
    $('body').append(`<p>${n} ${n == 1 ? uString : uString,'s'} ${n == 1 ? "resulta" : "resultam"} em ${hor.toFixed(3)} ${hor <= 1 ? "hora" : "horas"}, ou ${min.toFixed(3)} ${min <= 1 ? "minuto" : "minutos"}, ou ${seg} ${seg == 1 ? "segundo" : "segundos"}.</p>`)
}
