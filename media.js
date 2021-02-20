"use strict"

/* TODO:    1 - Validar alguns campos, como o de times e jogos, para não aceitar valores altos demais
                    talvez resolver usando um input range?
            2 - Transformar os inputs de placar em submit, atrelados ao botão
            3 - Deixar tudo bem mais bonito no bootstrap
*/

var obj = {}                // Aqui ficam armazenados o nome, placares e média dos times (o ultimo valor de cada array)
var nTeams = undefined;     // Aqui fica o número de times
var nMatches = undefined;   // Aqui fica o número de placares
var limit = 0;              // Aqui fica o limite do placar

$(document).ready(function() {                  // Quando carregar o documento
    $("#ok-button").hide()                      //Esconder o botão, por enquanto
    $("#titulo").html("Cálculo de placar")      // Título do exercício
    $("#descr").html(`
                    Faz a media dos placares dos times<br>
                    considerando apenas os resultados acima de um limite<br>
                    e anuncia o ganhador<br>`)  // Descrição do exercício


    //Adicionar inputs para a quantidade de times, limite do placar e número de jogos
    $('#descr').after(`
        <div class="row">
            <div class="col">
                <label for="teams">Quantidade de times: </label>
                <input type="number" id="teams" class="form-control w-75" min="2" max="5" placeholder="2-5">
            </div>
            <div class="col">
                <label for="limit">Limite do placar: </label>
                <input type="number" id="limit" class="form-control w-75" min="2" max="999" placeholder="2-999">
            </div>
            <div class="col">
                <label for="matches">Número de jogos: </label>
                <input type="number" id="matches" class="form-control w-75" min="1" max="12" placeholder="1-12">
            </div>
        </div>`);

    $('#content').append(`<div class="row results" id="score-results"></div>`)  // Uma div para os resultados

    $('#teams, #matches').change(function(){                        // Quando o numero de times e jogos for inserido
        if ($('#teams').val() != '' && $('#matches').val() != '' ){  // Somente se ambos os valores estiverem presentes
 
/*            $('#div-row').append(`                                      
                <form id="inputForm">
                <div class="row" id="entrada">
                </div></form>`)                                         // Criar o form
*/
            nTeams = Number($('#teams').val())                          // Guardar o numero de times e jogos
            nMatches = Number($('#matches').val())

            $("#teams").prop('disabled', true);                         // Congelar os inputs de nome
            $("#matches").prop('disabled', true);

            for (let i = 1; i-1 < nTeams; i++){             // Para cada time, criar uma div e um input para o nome
                $('#div-row').append(`<div class="col" id="params-${i}"></div>`) 
                $(`#params-${i}`).append(` 
                    <input type="text" class="form-control team-name" id="team-name-${i}" placeholder="Nome do ${i}° time">
                    `)

                obj['time' + i] = new Array(nMatches+2);    // Criar as arrays que vão conter os dados de cada time
                obj['time' + i][0] = " "                    // O primeiro index é uma string com o nome
                obj['time' + i].fill(0, 1, (nMatches+2))    // Popular as arrays

                for (let e = 1; e-1 < nMatches; e++){       // Criar os inputs para os valores
                    $(`#params-${i}`).append(`<input type="number" class="form-control score" id="score-${i}-${e}" class="form-control score" placeholder="${e}º placar">`);
                }
            }

            $('#ok-button').show()          // Mostrar o botão
        }

        $('.team-name').change(function(){            // POR QUE NÃO FUNCIONA FORA DESSA FUNÇÃO???
            //Inserir os nomes de cada time na respectiva array
            obj['time' + this.id.charAt(10)][0] = $(`#${this.id}`).val();
            $(`#${this.id}`).prop('disabled', true);  // Congelar o input de nome
        });
        
        $('.score').change(function(){                // POR QUE NÃO FUNCIONA FORA DESSA FUNÇÃO???
            // Inserir os valores de cada score na respectiva array
            obj['time' + this.id.charAt(6)][Number(this.id.slice(-1))] = Number($(`#${this.id}`).val());
        });
    })

    $("#ok-button").click( function(){                          // Quando clicar o botão
        limit = $('#limit').val()                               // Estabelecer o limite
        $('.results').empty()                                   // Limpar os resultados
        $('.team-name').each( function(){                       // Para cada time que houver
            var teamID = this.id.charAt(10)
            calcAvg(obj['time' + teamID], teamID)})         // Calcular a média
        winner()                                                // Anunciar o ganhador
    })
})


function calcAvg(teamArray, teamID){                    // Calcular e anunciar as somas e médias
    var total = 0;
    $('#score-results').append(                         // Criar uma div de resultados para cada time
        `<div class="col-sm" id="results-${teamID}">`)
    $(`#results-${teamID}`).append(                     // Anunciar os placares
        `<p>O placar do ${obj['time' + teamID][0]} foi: ${obj['time' + teamID].slice(1, -1).join(', ')}. </p>`);

    for (let i = 1; i <= nMatches; i++){                // Somar o placar se for maior que o limite
        if (teamArray[i] >= limit){
            total += teamArray[i];
        }
        else {                                             // Se não for, desconsidera-lo e anunciar
            $(`#results-${teamID}`).append(`</p>O ${i}° placar do ${teamArray[0]} (${teamArray[i]}) foi desconsiderado pois está abaixo de ${limit} pontos. </p>`);
        }
    };
    
    // Anunciar as somas e médias
    $(`#results-${teamID}`).append(`<p>A soma dos placares do ${teamArray[0]} é ${total}. </p>`)
    teamArray[(nMatches+1)] = Number((total / nMatches).toFixed(2));  // Calcular a média e arredondar, inserir na array
    $(`#results-${teamID}`).append(`<p>A média dos placares do ${teamArray[0]} é ${teamArray[(nMatches+1)]}. </p><br>`)
    total = 0;
};



function winner(){                                      // Funcão que encontra e anuncia o ganhador
    var avgScores = [];                                 // Uma array para as médias
    var i = 0;                                          // Vamos precisar de um index também
    for (var prop in obj){                              // Pra cada array dentro do obj
        avgScores[i] = Number(obj[prop][(nMatches+1)]); // Inserir os valores na array de medias
        i++;                                    
    }

    const max = Math.max(...avgScores);                                         // Encontrar o maior número dentre as medias
    const res = [];                                                             // Uma array para os index das maiores médias
    // Comparar o maior número com as medias e inserir o index na respectiva array de indexes
    avgScores.forEach((item, index) => item === max ? res.push(index): null);   // Funciona lindamente                          

    if (res.length == 1){                           // Caso só haja um ganhador
        $('#content').append(`<div class="row results"><div class="col"><p>O ${obj['time' + (res[0]+1)][0]} ganhou! </p></div></div>`)
    } 
    else {
        var tiedTeams = []                          // Uma array com os nomes dos times empatados
        res.forEach(function(value, e){             // Inserir os nomes dos times empatados
            tiedTeams[e] = obj['time' + (value+1)][0]
        })
                                                    // Anunciar os empates
        $('#content').append(`<div class="row results"><div class="col"><p>Houve empate entre os times: ${tiedTeams.join(', ')}</p></div></div>`)
    }
}