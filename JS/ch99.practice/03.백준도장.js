// 백준도장 2439 별찍기 제 2사분면

// let N =4;

// for (let i = 0; i <= N; i++){
//     let line = '';
//     for (let k = 0; k < N - i; k++)
//         line += ' ';
//     for (let k = 0; k < 2 * i + 1; k++)
//         line += '*';
//     console.log(line);
// }



/// X축 역방향 삼각형


let N = 5;
for (let i = 1; i <= N; i++) {
    let line = '';
    for (let k = 1; k <= N - i; k++)
        line += ' ';
    for (let k = 1; k <= i; k++)
        line += '*';
    console.log(line);
}