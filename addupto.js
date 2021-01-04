console.log(`teste`)


const numero = 5;

function adicionar(n) {
    soma = n;
    for (i = 0; i < numero; i++){
        console.log('n é igual a ', n);
        n--;
        console.log('n-1 é igual a ', n);
        soma = soma + n;
        console.log('soma é igual a ', soma);
    }
}
adicionar(numero);
