const queens = (size, row = 0, R = 0, L = 0, pos = (size-1), level = (size-1)) => {
  let answer = 0;
  let count = 0;
  R = R >> 1;
  L = L << 1;
  if (L >= (2**size)) L -= 2**size;
  let valid = R | L | row;
  for (let i = 0; i < size; i++) if (!(valid & 2**i)) count++;
  if ((level === 0 && count === 1) || (level != 0 && count === 0)) return count;
  while (pos >= 0) {
    const curr = 2**pos;
    if (!(curr & valid)) {
      const prevRow = row;
      const prevL = L;
      const prevR = R;
      row = curr | prevRow;
      if (!(L & curr)) L = L | curr;
      if (!(R & curr)) R = R | curr;
      if (pos >= 0) answer += queens(size, row, R, L, (size - 1), (level - 1));
      row = prevRow;
      L = prevL;
      R = prevR;
    }
    pos--;
  }
  return answer;
}

/*to run this function you can modify line 32 to include any value you are interested in (this will be faster) or
run it through the command line with node ./queens.js [boardSize]*/

const board = process.argv.slice(2);
const start = new Date().getTime();
const result = queens(board);
const end = new Date ().getTime();

console.log(`======================================
board size: ${board}x${board}.
result: ${result} possible combinations.
time: ${(end - start)} miliseconds.
======================================
`);