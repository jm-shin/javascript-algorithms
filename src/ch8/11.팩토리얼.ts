function solution(n: number) {
  let answer;

  function DFS(n: number): any {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }

  answer = DFS(n);
  return answer;
}

console.log(solution(5));