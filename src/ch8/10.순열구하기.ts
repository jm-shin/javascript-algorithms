function solution(m: number, arr: number[]) {
  let answer: any = [];
  let n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L: number) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));