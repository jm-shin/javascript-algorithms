function solution(m: number, ps: number[], pt: number[]) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = ps.length;

  function DFS(L: number, sum: number, time: number) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));