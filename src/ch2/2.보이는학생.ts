function solution(array: number[]) {
    let answer = 0;
    for(let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            answer++;
        }
    }
    return answer;
}

const array = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(array));