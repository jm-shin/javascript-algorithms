function solution(array: number[]) {
    let answer = array;
    const sum = array.reduce((a, b) => a + b, 0);

    for (let i = 0; i <= 7; i++) {
        for (let j = i + 1; j <= 8; j++) {
            if ((sum - (array[i] + array[j])) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }
    return answer;
}


const array = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(array));