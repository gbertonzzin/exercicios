"use strict"
 
var resultados = []
$( document ).ready(function() { 
    $("#titulo").html("ACHAR NUMERO MAIOR")
    $("#descr").html("Gera dois numeros aleatorios e encontra o maior.")
})

$("#botao").click(function (){ // Quando clicar o botao
    numeromaior()
})

function numeromaior(){
    let a = num();
    let b = num();
    $('body').append(`<p>${a}, ${b}</p>`) // Anunciar os numeros
    if (a > b) { // Verificar qual o maior e anunciar
        $('body').append('<p>O primeiro número é maior!</p>')
        resultados.push(a) // Adicionar o ganhador a array de resultados
        } else if (a < b) {
            $('body').append('<p>O segundo número é maior!</p>')
            resultados.push(b)
        }
            else {
                $('body').append('<p>Os dois números são iguais!</p>')
                resultados.push(a)
            }
            // Anunciar os resultados
            $('body').append(`<p>Os resultados até agora foram: ${resultados.join(', ')}</p><br>`) 
}

function num() { //Gerar dois numeros aleatorios
    let n1 = Math.round(Math.random()*10) 
    let n2 = Math.round(Math.random()*10)
    let r = n1*n2; // Multiplica-los

    return r;
}
