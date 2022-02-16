function solution(a: number, b: number, c: number): number {
    let answer: number;
    if (a < b) {
        answer = a;
    } else {
        answer = b;
    }
    if (answer > c) {
        answer = c;
    }
    return answer;
}

console.log(solution(6, 5, 11));