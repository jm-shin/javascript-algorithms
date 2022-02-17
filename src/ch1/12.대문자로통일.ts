function solution(str: string) {
    let answer = '';
    for (let x of str) {
        let num = x.charCodeAt(0);
        if (num >= 97 && num <= 122) {
            answer += String.fromCharCode(num - 32);
        } else {
            answer += x;
        }

        // if (x === x.toLowerCase()) answer += x.toUpperCase();
        // else answer += x;
    }
    return answer;
}

const str = 'ItisTimeToStudy';
console.log(solution(str))