// while 반복문

const summerFruits = ['수박', '참외', '복숭아', '포도'];

let index = 0;
while (index < summerFruits.length){
    console.log(summerFruits[index]);
    index++;                            // 조건을 변화하는 실행문이 반드시 필요  없으면 무한 loop
}

// 주사위를 던진 합이 21을 초과할 때 loop 탈출하고
// 그간 던진 주사위 눈을 출력

let array = [];
let sumDice = 0;
while (sumDice <= 21){
    let dice = Math.ceil(Math.random() * 6);
    // console.log(dice);
    array.push(dice);
    sumDice += dice;
}
console.log(array);
console.log(sumDice);

