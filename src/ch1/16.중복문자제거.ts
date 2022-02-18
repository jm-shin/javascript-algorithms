function solution(str: string): string {
    let answer = '';

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            answer += str[i];
        }
    }
    return answer;
}

//번외: k 갯수탐색
function solution2(str: string): number {
    let answer = 0;
    let pos = str.indexOf('k');
    while (pos !== -1) {
        answer++
        pos = str.indexOf('k', pos + 1);
    }
    return answer;
}

console.log(solution('ksekkset'));
console.log(solution2('ksekkset'));