function solution(c: number, arr: number[]){
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L: number, sum: number) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));