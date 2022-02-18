function solution(str: string[]) {
    let answer = str.filter((value, index) => {
        return str.indexOf(value) === index;
    });
    return answer;
}

const str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));