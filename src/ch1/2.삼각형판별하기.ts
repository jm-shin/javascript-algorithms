function solution(a: number, b: number, c: number): string {
    let answer: string = 'NO';
    let max: number;
    const total: number = a + b + c;

    if (a > b) {
        max = a;
    } else {
        max = b
    }
    if (max < c) {
        max = c;
    }

    if ((total - max) > max) {
        answer = 'YES';
    }
    return answer;
}

console.log(solution(13, 33, 17));