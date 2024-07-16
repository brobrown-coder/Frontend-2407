// 생년월일에 따른 나이 계산

const bY = 1987, bM = 7, bD = 19;
const today = new Date();
let tY = today.getFullYear();
let tM = today.getMonth() + 1;      // 자바는 Month에 +1 해줘야함
let tD = today.getDate();
let age = 0;

// 3항연산자

let age2 ='';

if (bM === tM){
    age2 = bD <= tD ? tY - bY -1 : tY - bY;
}
else {
    age2 = bM <  tM ? tY - bY -1 : tY - bY;
}
console.log(`나이는 ${age2}입니다.`);



// if (bM < tM)
//     age = tY - bY - 1;
// else if (bM > tM)
//     age = tY - bY;
// else {
//     if(bD =< tD)
//         age = tY - bY;
//     else(tD > bD)
//         age = tY - bY -1; 
// }   
// console.log(`생일: ${bY}-${bM}-${bD}, 나이: ${age}`);
