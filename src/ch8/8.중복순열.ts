function solution(n: number, m: number) {
  let answer: any[] = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L: number) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));