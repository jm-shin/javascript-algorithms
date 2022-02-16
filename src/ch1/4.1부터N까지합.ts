function solution(number: number): number {
    let answer: number = 0;
    for (let i = 0; i <= number; i++) {
        answer += i;
    }
    return answer;
}

console.log(solution(10));