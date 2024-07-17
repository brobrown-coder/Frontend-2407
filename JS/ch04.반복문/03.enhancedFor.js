// Enhanced for 반복문

const summerFruits = ['수박', '참외', '복숭아', '포도'];
// for (let i = 0; i < summerFruits.length; i++) {
//     console.log(i, summerFruits[i]);                    // 제일 바람 직한 표현
// }

// for (let i in summerFruits) {
//     console.log(i, summerFruits[i]);
// }

// array의 모든 요소에 대해         자바에서 많이 사용하는 방법
for (let fruit of summerFruits){
    console.log(fruit);
}

// 여름 과일들을 하나의 문자열로 만들기
let favFru = '';
for(let fruit of summerFruits)
    favFru += fruit + ' ';
console.log(favFru);

// 1에서 10까지의 곱한 값 (10 factorial)
let product = 1;
for (let i = 1; i <= 10; i++)
    product *= i;
console.log(product);

// 1에서 30까지 3의 배수의 배열 만들기 ex[3,6,9....30]
let multiple3 = [];
for (let i = 3; i <= 30; i += 3)
    multiple3.push(i);
console.log(multiple3);