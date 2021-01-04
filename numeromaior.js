"use strict"

function numero1() {
    const a1 = Math.round(Math.random()*10)
    const b1 = Math.round(Math.random()*10)
    return a1*b1;
}

const num1 = numero1()
console.log(num1);

function numero2() {
    const a2 = Math.round(Math.random()*10)
    const b2 = Math.round(Math.random()*10)
    return a2*b2;
}

const num2 = numero2()
console.log(num2);

if (num1 < num2) {
    console.log('O primeiro número é menor que o segundo!')
    } else if (num1 > num2) {
        console.log('O primeiro número é maior que o segundo!')}
        else {
            console.log('Os dois números são iguais!')
        }