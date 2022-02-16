function solution(array: number[]): number {
    let answer: number = array[0];
    array.forEach((currentValue) => {
        if (answer > currentValue) {
            answer = currentValue;
        }
    });
    return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));