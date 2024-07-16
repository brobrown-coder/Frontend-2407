/*
 * 3항 연산자
 */

let dice = Math.ceil(Math.random() * 6);      // 1 ~ 6 사이의 값
let result ='';

if (dice % 2 ==0)
    result = "짝수";
else
    result = "홀수";
console.log(`${dice} 은는 ${result}입니다.`);

let evenOdd = dice % 2 == 0 ? '짝수' : '홀수';      //조건식 ? 참일때의 값 : 거짓일때의 값
console.log(`${dice} 은는 ${evenOdd}입니다.`);

let sb = dice <= 3 ? '작은수' : '큰수';
console.log(`${dice} 은/는 ${sb}입니다.`);

let score = Math.ceil(Math.random() * 50) + 50;
let sign = score % 10 >= 7 ? '+' : score % 10 >=3 ? '0' : '-';
switch (parseInt(score / 10)) {         //score 값은 5,6,7,8,9,10
    case 10: 
        grade = 'A+';
        break;
    case 9:
        grade = 'A' + sign;
        break;                      // switch 문을 벗어나게 해줌
    case 8:
        grade = 'B' + sign;
        break;
    case 7:
        grade = 'C' + sign;
        break;
    case 6:
        grade = 'D' + sign;
        break;
    default:
        grade = 'F' + sign;
}
console.log(`점수: ${score}, 학점: ${grade}`);