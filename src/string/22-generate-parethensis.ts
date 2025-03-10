function generateParenthesis(n: number): string[] {
  let res: string[] = [];

  function backtrack(openN: number, closeN: number, current: string) {
    if (openN === n && closeN === n) {
      res.push(current);
      return;
    }

    if (openN < n) {
      backtrack(openN + 1, closeN, current + '(');
    }

    if (closeN < openN) {
      backtrack(openN, closeN + 1, current + ')');
    }
  }

  backtrack(0, 0, '');

  return res;
}

// Hàm main để gọi hàm generateParenthesis
function main() {
  const n = 3; // Bạn có thể thay đổi giá trị của n ở đây
  const result = generateParenthesis(n);
  console.log(`Generated Parentheses for n = ${n}:`, result);
}

main(); // Gọi hàm main để chạy
