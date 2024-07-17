// 중첩(nested) for 반복문

// 1. 별 다섯개를 여섯줄 그리기
for (let i = 0; i < 6; i ++) {
    let line = '';
    for (let k = 0; k < 5; k ++) {
        line += '* ';    
    }
    console.log(line);
}

// 2. 디지털 시계를 매 10 분단위로 출력
// for (let hour = 0; hour <= 23; hour++) {
//     for(let min = 0; min <= 59; min++) {
//         if(min % 10 == 0)
//             console.log(`${hour}:${min}`);
//     }
// }

// 3. 별을 삼각형 모양으로 그리기
for (let i = 0; i < 5; i++) {
    let line ='';
    for (let k = 0; k < i + 1 ; k++)
        line += '* ';
    console.log(line);
}

// 4. 별을 역삼각형 모양으로 그리기
for (let i = 5; i >0; i--){
    let line = '';
    for (let k = 0; k < i; k++)
        line += '* ';
    console.log(line);
}

// 5. 주사위 눈으로 6 x 6 배열 만들기
let diceArray = [];
for(let i = 0; i <6; i++) {
    let line =[];
    for(let k = 0; k < 6; k++)
        line.push(Math.ceil(Math.random()*6));
    diceArray.push(line);
}
console.log(diceArray);
 
// 6. 구구단 만들기
let multiple = [];
for(let i = 2; i< 10; i++) {
    let line = [];
    for(let k = 1; k < 10 ; k++)
        line.push(`${i}x${k}=${i*k}`);
    multiple.push(line);
}
console.log(multiple);

for(let i = 2; i< 10; i++) {
    let line = [];
    for(let k = 1; k < 10 ; k++)
        console.log(`${i}x${k}=${i*k}`);
}
console.log();

// 7. 다이아 별표 만들기

let N = 4;      // 가운데 두꺼운 별이 9개
for (let i = 0; i <=N; i++){
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k= 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
for (let i = N - 1; i >= 0; i--){
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k= 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}