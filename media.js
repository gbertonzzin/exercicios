"use strict"

var objeto = { // Aqui ficam armazenados o nome, placares e média dos times
    time1 : [" ", 0, 0, 0, 0, 0, 0], 
    time2 : [" ", 0, 0, 0, 0, 0, 0]}
var media = (objeto.time1.length - 1); // Essa variável é o número de placares que temos

// Quando carregar o documento
$( document ).ready(function() { 
    //console.log( "DOCUMENT READY" ); //Teste
    //Adicionar os campos para os nomes dos times
    $('#entrada').prepend(`<input type="text" id="nome1" placeholder="Nome do primeiro time">
                            <input type="text" id="nome2" placeholder="Nome do segundo time"><br>`)
    //E uma div para o segundo placar
    $('#entrada').append('<div id="parametros2"></div>')
    
    $('#nome1').change(function() { // Quando o nome do primeiro time for inserido
        objeto.time1[0] = $('#nome1').val() // Inserir o nome do time no objeto
        for (let i = 1; i < media; i++){    // Adicionar os campos para o placar
            $('#parametros').append(`<input type="text" id="parametro1_${i}" placeholder="${i} placar do ${objeto.time1[0]}">`);
        }
        $("#label").html("Insira os placares")
     });
     $('#nome2').change(function() { // Quando o nome do segundo time for inserido
        objeto.time2[0] = $('#nome2').val() // Inserir o nome do time no objeto
        for (let i = 1; i < media; i++){    // Adicionar os campos para o placar
            $('#parametros2').append(`<input type="text" id="parametro2_${i}" placeholder="${i} placar do ${objeto.time2[0]}">`);
        }
     });
});

// Quando clicar o botão
$("#botao").click(function (){ 
    //console.log('CLICK'); // Teste
    // Inserir os valores dos placares
    for (let i = 1; i < media; i++){
        objeto.time1[i] = parseInt($(`#parametro1_${i}`).val())
        objeto.time2[i] = parseInt($(`#parametro2_${i}`).val())
    }
    
    // Anunciar os placares
    console.log(`O placar do ${objeto.time1[0]} foi: ${objeto.time1.slice(1, (media))}.`);
    console.log(`O placar do ${objeto.time2[0]} foi: ${objeto.time2.slice(1, (media))}.`);
    // Calcular e anunciar as somas e médias
    calcMedia(objeto.time1);
    calcMedia(objeto.time2)
    // Anunciar o ganhador
    if (objeto.time1[media] > objeto.time2[media])              
        {console.log(`O ${objeto.time1[0]} ganhou!`)}
        else  if (objeto.time1[media] < objeto.time2[media])        
        {console.log(`O ${objeto.time2[0]} ganhou!`)}
        else                                   
        {console.log(`Os placares empataram!`)}
    
})

function calcMedia(placar){ // A funcão que calcula
    var soma = 0;
    for (let i = 1; i < media; i++){ // Somar o placar se for maior que 100
        if (placar[i] >= 100){
            soma += placar[i];} 
        else { // Se não, desconsidera-lo e anunciar
            console.log(`O ${i}° placar do ${placar[0]} (${placar[i]}) foi desconsiderado pois está abaixo de 100 pontos.`);
        }
    }

    // Anunciar os resultados
    console.log(`A soma dos placares do ${placar[0]} é ${soma}.`)
    placar[media] = Math.round(soma / media);
    console.log(`A média dos placares do ${placar[0]} é ${placar[media]}.`)
    soma = 0;

    return false;
 }

    