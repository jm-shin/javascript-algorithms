function solution(n: number) {
  function DFS(L: number) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }

  DFS(n);
}

solution(3);