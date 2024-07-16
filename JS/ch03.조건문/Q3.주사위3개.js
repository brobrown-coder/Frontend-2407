// 주사위 3개 - 백준도장 2480

let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let dice3 = Math.ceil(Math.random() * 6);

console.log(dice1);
console.log(dice2);
console.log(dice3);

let prize = 0;

if (dice1 == dice2 && dice2 == dice3)       // if (dice1 == dice2 == dice3) 파이선에서 가능
    prize = 10000 + 1000 * dice1;
else if (dice1 == dice2)
    prize = 1000 + 100 * duce1;
else if (dice2 == dice3)
    prize = 1000 + 100 * dice2;
else if (dice1 == dice3)
    prize = 1000 + 100 * dice1;
else {
    let maxDice = dice1 > dice2 ? dice1 : dice2;
    //let maxDice = Math.max(dice1, dice2, dice3);      //Math.max() 최대값 골라줌
    maxDice = maxDice > dice3 ? maxDice : dice3;
    prize = 100 * maxDice;
}

console.log(dice1, dice2, dice3,'==>', prize);


// let n ='';

// if (dice1 === dice2){
//     if(dice2 === dice3){
//         n = 10000 + dice1 * 1000;
//     }
//     else(dice2 !== dice3) 
//         n = 1000 + dice1 * 100;
//     }
// else{
//     if(dice2 === dice3){
//         n = 1000 + dice1 * 100;
//     }
//     else(dice2 !== dice3)
//         n = dice1 * 100;
//     }

// console.log(`${n}원 입니다`);

