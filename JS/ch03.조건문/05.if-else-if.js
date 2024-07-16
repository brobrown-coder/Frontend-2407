/*
 *      if()
 *      else if()
 *      ...
 *      else
 */
// score
let score = Math.ceil(Math.random() * 60) + 40;     // 41 ~ 100 사이의 정수
let grade = '';

if (score >= 90)
    grade = 'a';
else if (score >= 80)
    grade = 'b';
else if (score >= 70)
    grade = 'c';
else if (score >= 60)
    grade = 'd';
else
    grade = 'f';

console.log(`점수: ${score}, 학점: ${grade}`);

// FizzBuzz
// 숫자가5로 나누어지면 Fizz, 7로 나누어 지면 Buzz, 5와 7 둘다 나누어지면 FizzBuzz
// 위의 경우가아니면 숫자를 출력



let num = Math.ceil(Math.random() * 100);
if (num % 35 == 0)          // if (num % 5 == 0 && num % 7 == 0)
    console.log(`FizzBuzz`); 
else if (num % 7 == 0)
    console.log(`Buzz`);
else if (num % 5 == 0)
    console.log(`Fizz`);
else
    console.log(`${num}`);