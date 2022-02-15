//3개 굿자 중 최소값 구하기
function solution(a, b, c) {
    let answer;
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;
    return answer;
}

console.log(solution(3, 5, 10));