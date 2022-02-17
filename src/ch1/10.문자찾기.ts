function solution(str: string, alphabet: string) {
    let answer = 0;
    for (let item of str) {
        if (item === alphabet) {
            answer++;
        }
    }
    return answer;
}

function solution2(str: string, a: string) {
    let answer = str.split(a).length;
    return answer - 1;
}

const str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));
console.log(solution2(str, 'R'));