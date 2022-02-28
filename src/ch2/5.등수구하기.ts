function solution(array: number[]) {
    let answer = Array.from({length: array.length}, () => 1);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <array.length; j++) {
            if (array[j] > array[i]) {
                answer[i]++;
            }
        }
    }
    return answer;
}

const array = [87, 89, 92, 100, 76];
console.log(solution(array));