function solution(str: string) {
    return str.replace(/A/g, '#');
}

function solution2(str: string) {
    let answer = '';
    for (let x of str) {
        if (x === 'A') {
            answer += '#'
        } else {
            answer += x
        }
    }
    return answer;
}

console.log(solution('BANANA'))
console.log(solution2('BANANA'))