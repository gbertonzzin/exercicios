"use strict"

var objeto = { // Aqui ficam armazenados o nome, placares e média dos times (o ultimo valor)
    time1 : [" ", 0, 0, 0, 0, 0, 0], 
    time2 : [" ", 0, 0, 0, 0, 0, 0]}
var jogos = (objeto.time1.length - 1); // Essa variável é o número de jogos que temos

// Quando carregar o documento
$( document ).ready(function() { 
    $("#titulo").html("CÁLCULO DE PLACAR")
    $("#descr").html("Faz a media dos placares de dois times<br>considerando apenas os resultados acima de um limite<br>e anuncia o ganhador<br>")
    //Uma div para o segundo placar
    $('#entrada').append('<div class="coluna" id="parametros2"></div>')
    //Adicionar os campos para os nomes dos times
    $('#parametros').append(`<input type="text" id="nome1" placeholder="Nome do primeiro time">`)
    $('#parametros2').append(`<input type="text" id="nome2" placeholder="Nome do segundo time"><br>`)
    
    $('#nome1').change(function() { // Quando o nome do primeiro time for inserido
        objeto.time1[0] = $('#nome1').val() // Inserir o nome do time no objeto
        for (let i = 1; i < jogos; i++){    // Adicionar os campos para o placar
            $('#parametros').append(`<input type="number" id="parametro1_${i}" class="valor" placeholder="${i} placar do ${objeto.time1[0]}"><br>`);
        }
        
     });
     $('#nome2').change(function() { // Quando o nome do segundo time for inserido
        objeto.time2[0] = $('#nome2').val() // Inserir o nome do time no objeto
        for (let i = 1; i < jogos; i++){    // Adicionar os campos para o placar
            $('#parametros2').append(`<input type="number" id="parametro2_${i}" class="valor" placeholder="${i} placar do ${objeto.time2[0]}"><br>`);
        }
     });
     // Quando clicar o botão
    $("#botao").click( function(){media()});
});


function media(){
    console.log('TESTE')
    // Inserir os valores dos placares
    for (let i = 1; i < jogos; i++){
        objeto.time1[i] = parseInt($(`#parametro1_${i}`).val())
        objeto.time2[i] = parseInt($(`#parametro2_${i}`).val())
    }
    // Anunciar os placares
    $('body').append(`<p>O placar do ${objeto.time1[0]} foi: ${objeto.time1.slice(1, (jogos))}.</p>`);
    $('body').append(`<p>O placar do ${objeto.time2[0]} foi: ${objeto.time2.slice(1, (jogos))}.</p>`);
    // Calcular e anunciar as somas e médias
    calcMedia(objeto.time1);
    calcMedia(objeto.time2);
    // Anunciar o ganhador
    if (objeto.time1[jogos] > objeto.time2[jogos]) {             
        $('body').append(`<p>O ${objeto.time1[0]} ganhou!</p>`)}
        else  if (objeto.time1[jogos] < objeto.time2[jogos])        
        {$('body').append(`<p>O ${objeto.time2[0]} ganhou!</p>`)}
        else                                   
        {$('body').append(`<p>Os placares empataram!</p>`)}
    };

function calcMedia(placar){ // A funcão que calcula a media
    var soma = 0;
    for (let i = 1; i < jogos; i++){ // Somar o placar se for maior que 100
        if (placar[i] >= 10){
            soma += placar[i];} 
        else { // Se não, desconsidera-lo e anunciar
            $('body').append(`</p>O ${i}° placar do ${placar[0]} (${placar[i]}) foi desconsiderado pois está abaixo de 10 pontos.</p>`);
        }
    };

    // Anunciar os resultados
    $('body').append(`<p>A soma dos placares do ${placar[0]} é ${soma}.</p>`)
    placar[jogos] = (soma / jogos).toFixed(2);
    $('body').append(`<p>A média dos placares do ${placar[0]} é ${placar[jogos]}.</p>`)
    soma = 0;

    return false;
 }

    