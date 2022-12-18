function solution(n: number) {
  let answer = '';

  function DFS(n: number) {
    if (n === 0) return;
    else {
      DFS(parseInt(String(n / 2)));
      answer += String(n % 2);
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(11));