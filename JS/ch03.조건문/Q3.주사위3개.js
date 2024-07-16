// 주사위 3개 - 백준도장 2480

let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let dice3 = Math.ceil(Math.random() * 6);

console.log(dice1);
console.log(dice2);
console.log(dice3);

let n ='';

if (dice1 = dice2){
    if(dice2 = dice3){
        n = 10000 + dice1 * 1000;
    }
    else(dice2 !== dice3) 
        n = 1000 + dice1 * 100;
    }
else{
    if(dice2 = dice3){
        n = 1000 + dice1 * 100;
    }
    else(dice2 !== dice3)
        n = dice1 * 100;
    }

console.log(`${n}원 입니다`);

