// String 객체

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드(method)
console.log(hello[2], hello.charAt(2));     // '하'
console.log(hello + '여러분!', hello.concat('여러분!'));
console.log(hello.indexOf('세'), hello.indexOf('가'));          // ** idexOf 문자열에서 특정문자 있는지 확인..없으면 '-1' **
console.log(hello.includes('세'));
console.log('pineapple'.lastIndexOf('p'));                      // 6 오른쪽부터 왼쪽으로 탐색

// 문자열을 분리하여 배열을 생성
console.log(hello.split());

let fruits = '수박,참외,포도';
let fruitsArray = fruits.split(',');
console.log(fruitsArray);                   // 배열생성

// 문자열의 일부분(substring)
let today = new Date().toISOString();
console.log(today);
// 날짜 추출 
console.log(today.substring(0,10));
// 시간 추출 - 02:12:21
console.log(today.substring(11,19));        // 11에서 출발해서 8글자를 읽음(11+8)
console.log(new Date().toLocaleString());       // 2024. 7. 19. 오전 11:20:31
console.log(new Date().toLocaleString().substring(13));     // 인덱스 16부터 끝까지

// 공백제거
let space = ' \t   Hello?     \r\n  ';
console.log(space);
console.log(space.trim());      // 양쪽의 White space: 공백, 탭, \r, \n 제거

// Method chaining
console.log(space.trim().substring(0,5).toUpperCase());

// 문자열 변환
let sample = 'A quick brown fox';
console.log(sample.replace('A','The'));
console.log(sample.replace('o','O'));

// 정규표현식(Regular Expression)
sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
// 영문자와 공백만 남기고 모두 지움
console.log(sample.replace(/[^A-Z a-z]/g, ''));
// 한글과 공백만 남기고 모두 지움
console.log(sample.replace(/[^가-힣ㄱ-ㅎ ㅏ-ㅣ]/g, ''));
console.log(sample.replace(/[^0-9-=]/g, ''));