function solution(a: number[], b: number[]): string[] {
    return a.reduce((acc, cur, i) => {
        if (cur === b[i]) {
            acc.push('D');
        } else if ((cur === 1 && b[i] === 3) || (cur == 2 && b[i] == 1) || (cur == 3 && b[i] == 2)) {
            acc.push('A');
        } else {
            acc.push('B');
        }
        return acc;
    }, <string[]>[]);
}

function solution2(a: number[], b: number[]): string[] {
    let answer = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            answer.push('D');
        } else if ((a[i] === 1 && b[i] === 3) || (a[i] == 2 && b[i] == 1) || (a[i] == 3 && b[i] == 2)) {
            answer.push('A');
        } else {
            answer.push('B');
        }
    }
    return answer;
}
const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution2(a, b));