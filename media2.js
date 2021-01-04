'use strict';

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


const placar1 = ['Corinthians', 200, 100, 100];
const placar2 = ['Palmeiras', 50, 500, 50];

const calcMedia = (a, b, c) => (a + b + c) / 3;
const media1 = calcMedia(placar1[1], placar1[2], placar1[3]);
const media2 = calcMedia(placar2[1], placar2[2], placar2[3]);
const placarMaior = (p1, p2) => {if (p1 > p2) {return p1} else if (p1 < p2) {return p2} else {return p1}}
console.log(`O placar do ${placar1[0]} foi ${media1} e o placar do ${placar2[0]} foi ${media2}`)

function vencedor(m1, m2){
    if (m1 == m2) {console.log(`Houve um empate entre ${placar1[0]} e ${placar2[0]}!`)}
    else if ((m1 / 2) >= m2) {console.log(`O vencedor foi ${placar1[0]} com ${m1} pontos, e ${placar2[0]} teve ${m2} pontos!`)}
    else if ((m2 / 2) >= m1) {console.log(`O vencedor foi ${placar2[0]} com ${m2} pontos, e ${placar1[0]} teve ${m1} pontos!`)}
    else if ((m1 / 2) < m2 || (m2 / 2) < m1) {console.log(`Não houve vencedor, pois o placar maior (${placarMaior(m1, m2)}) não chega ao dobro do menor`)}
    else return undefined;
}

vencedor(media1, media2);