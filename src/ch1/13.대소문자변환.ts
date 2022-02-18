function solution(str: string) {
    let answer = '';
    for (let x of str) {
        if (x.toUpperCase() === x) {
            answer += x.toLowerCase();
        } else if (x.toLowerCase() === x) {
            answer += x.toUpperCase();
        }
    }
    return answer;
}

const str = 'StuDY';
console.log(solution(str));