function solution(array: number[]){
    let answer = 0;
    let count = 0;
    for (let x of array) {
        if (x === 1) {
            count ++;
            answer += count;
        } else if (x === 0) {
            count = 0;
        }
    }
    return answer;
}

let array = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(array));