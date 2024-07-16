// 시험성적 - 백준도장 9498

let score = Math.ceil(Math.random()*50) + 50;       // 50 ~ 100 미만의 정수
console.log(score);

let grade = '';

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`등급은 ${grade}입니다.`);