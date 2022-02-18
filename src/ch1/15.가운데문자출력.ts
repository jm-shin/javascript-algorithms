function solution(str: string) {
    let answer = '';
    const isOdd = str.length % 2 == 1;
    const middleNumber = Math.floor(str.length / 2);
    if (isOdd) {
        // answer = str.substring(middleNumber, middleNumber + 1);
        answer = str[middleNumber];
    } else {
        // answer = str.substring(middleNumber - 1, middleNumber + 1);
        answer += str[middleNumber - 1];
        answer += str[middleNumber];
    }
    return answer;
}

const str = 'good'
console.log(solution(str));

// console.log(str.substring(1, 2));