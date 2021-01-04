console.log("teste");


var time1 = ["Corinthians", 130, 108, 83, 100, 99];
var time2 = ["Palmeiras", 88, 109, 110, 98, 107];
var medias = [0, 0];


console.log(`Os placares do ${time1[0]} são: ${time1.slice(1, 6)}.`);
console.log(`Os placares do ${time2[0]} são: ${time2.slice(1, 6)}.`);

function calcMedia(placar1, placar2){
    var soma = 0;
    for (var i = 1; i < placar1.length; i++){
        if (placar1[i] >= 100){
            soma += placar1[i];
        } else {
            console.log(`O ${i}° placar do ${time1[0]} (${time1[i]}) foi desconsiderado pois está abaixo de 100 pontos.`);
        }
    }
    console.log(`A soma dos placares do ${placar1[0]} é ${soma}.`)
    medias[0] = soma / (placar1.length - 1);
    console.log(`A média dos placares do ${placar1[0]}' é ${medias[0]}.`);
    soma = 0;

    for (var i = 1; i < placar2.length; i++){
        if (placar2[i] >= 100){
            soma += placar2[i];
        } else {
            console.log(`O ${i}° placar do ${time2[0]} (${time2[i]}) foi desconsiderado pois está abaixo de 100 pontos.`);
        }
    }
    console.log(`A soma dos placares do ${placar2[0]} é ${soma}.`);
    medias[1] = soma / (placar1.length - 1);
    console.log(`A média dos placares do ${placar2[0]}' é ${medias[1]}.`);
    soma = 0;
 }
calcMedia(time1, time2)

    if (medias[0] > medias[1])              {console.log(`AE O CORINTHIANS GANHOU CARALHO`)}
    else  if (medias[0] < medias[1])        {console.log(`SIFUDÊ PORCADA BANDO DE LADRÃO`)}
    else                                    {console.log(`Deu empate, todo mundo pra casa.`)}