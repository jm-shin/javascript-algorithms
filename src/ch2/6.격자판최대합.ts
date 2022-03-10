function solution(array: number[][]) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = array.length;
    //행
    let sum1 = 0;
    //열
    let sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 = 0;
        sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += array[i][j];
            sum2 += array[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }

    sum1 = 0;
    sum2 = 0;
    for (let i = 0; i < n ; i++) {
        sum1 += array[i][i];
        sum2 += array[i][n - i - 1];
    }

    return answer;
}

const array = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];
console.log(solution(array));