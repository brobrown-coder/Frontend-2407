// 여러개 값중에 하나를 선택
let score = Math.ceil(Math.random()*50) + 50;       // 51 ~ 100 사이의 정수
let grade = '';
let sign = '';
if(score % 10 >=7)
    sign = '+';
else if (score % 10 >=3)
    sign = '0';
else
    sign = '-';

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




// switch (score % 10){
//     case >= 7:
//         sign = '+';
//     case >= 4:
//         sign = '0';
//     default
//         sign = '-';
// }