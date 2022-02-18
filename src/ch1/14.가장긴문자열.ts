function solution(str: string[]) {
    let answer = '';
    let max = 0;
    for (let item of str) {
        if (item.length > max) {
            answer = item;
            max = item.length;
        }
    }
    return answer;
}

const str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str))