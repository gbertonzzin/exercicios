"use strict"


$( document ).ready(function() { //trocar o placeholder para ficar mais explicito
    console.log( "TESTE" );
    $("#parametros").html("Insira as dimensões do retângulo")
    $("#parametro1").attr("placeholder", "Lado")
    $("#parametro2").attr("placeholder", "Diagonal")
    $("#botao").click(function teste(){
        var par1 = parseInt($('#parametro1').val())
        var par2 = parseInt($('#parametro2').val())
        console.log(par1, par2, typeof par1, typeof par2)
        calcular(par1, par2)
    })
});


function calcular(p1, p2){
     //p1 é o cateto, p2 é a hipotenusa (diagonal do retangulo)
    //pitágoras: (p1**2 + cateto**2) = p2**2
 //   const cateto = Math.sqrt(p1**2 - p2**2)
 //   const perimetro = ((p1*2) + (cateto*2))
 //   const area = p1*cateto
//    console.log( perimetro, area)
    
};
