// 사분면 고르기 - 백준도장 14681
let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);
x *= Math.random() > 0.5 ? 1 : -1;
y *= Math.random() > 0.5 ? 1 : -1;
console.log(x, y);  

//x>0 y>0
//x<0 y>0
//x>0 y<0
//x<0 y<0

// switch (x>0) {
//     case y>0:
//         console.log(`${x},${y}는 제1사분면 입니다`);
//         break;
//     default:
//         console.log(`${x},${y}는 제4사분면 입니다`);
//         break;
// }
// switch (x<0) {
//     case y>0:
//         console.log(`${x},${y}는 제2사분면 입니다`);
//         break;
//     default:
//         console.log(`${x},${y}는 제3사분면 입니다`);
//         break;
// }
let = '';

if (x > 0 && y > 0)
    n = '1';
else if (x > 0 && y < 0)
    n = '4';
else if (x < 0 && y >0)
    n = '2';
else
    n = '3';
console.log(`${x},${y}는 제${n}사분면 입니다.`);