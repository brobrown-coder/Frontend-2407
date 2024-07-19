// JSON - JavaScript Object Notaion
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 - XML(eXtensible Markup Language)
// 실제는 JSON이 업계 표준임(de facto standard)
// API 활용

let name = 'James', age = 27, job = '프로그래머';
let person = {name: name, age: age, job: job};
let newPerson = {name, age, job};           // key 이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson);

let extranalForm = JSON.stringify(person);          // 외부로 나갈때
console.log(extranalForm);

let internalForm =JSON.parse(extranalForm)          // 내부로 들어올때
console.log(internalForm);

let personArray = [person, {name: 'Maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));

