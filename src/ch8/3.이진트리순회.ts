function solution(n: number) {
  let answer = '';

  function DFS(v: number) {
    if (v > 7) return;
    else {
      answer += (v + ' ');
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }

  DFS(n);
  return answer;
}

console.log(solution(1));