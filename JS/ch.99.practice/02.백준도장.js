// 백준도장 2438 별찍기 -1

let N = 5;
for(let i = 1; i <= N; i++){
    let line = '';
    for(let k = 1; k < i + 1; k++)
        line += '* ';
}
console.log(line);
