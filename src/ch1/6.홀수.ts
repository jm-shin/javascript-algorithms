function solution(array: number[]) {
    let answer = [];
    const odd = array.filter((item) => item % 2 === 1);
    const sum = odd.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, 0);
    const min = odd.reduce((acc, cur) => {
        if (acc > cur) {
            acc = cur;
        }
        return acc;
    }, odd[0]);
    answer.push(sum);
    answer.push(min);
    return answer;
}

const array = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(array));