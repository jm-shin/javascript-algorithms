function solution(day: number, array: number[]) {
    return array.reduce((acc, cur) => {
        if (day == cur % 10) acc ++;
        return acc;
    }, 0);
}

const array = [12, 20, 54, 30, 87, 91, 30];

console.log(solution(0, array));