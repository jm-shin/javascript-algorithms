function solution(s: string) {
    let answer: number = 0;
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
            if (s[i - 1] === '(') answer += stack.length;
            else answer++;
            //stack.pop(); 여기에 위치하면 레이저까지 카운팅한다.
        }
    }
    return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));