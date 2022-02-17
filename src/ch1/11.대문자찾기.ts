function solution(str: string): number {
    let answer = 0;
    for (let s of str) {
        if (s === s.toLocaleUpperCase()) {
            answer++;
        }
    }
    return answer;
}

const str = 'KoreaTimeGood';
console.log(solution(str));