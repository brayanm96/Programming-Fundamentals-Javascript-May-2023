function solve(parse1,parse2) {
    let sum = 0;
    let output = '';

    for (let i = parse1; i <= parse2; i++) {
        sum += i;
        output += `${i} `;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
solve(50,60);