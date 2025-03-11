function isPalindrome(x: number): boolean {
  const xStr = x.toString();
  return xStr === xStr.split('').reverse().join('');
}

function testIsPalindrome() {
  const testCases = [
    { input: 121, expected: true },
    { input: -121, expected: false },
    { input: 10, expected: false },
    { input: 1221, expected: true },
    { input: 0, expected: true },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = isPalindrome(input);
    console.log(
      `Test ${index + 1}:`,
      result === expected
        ? 'PASSED'
        : `FAILED (Expected ${expected}, got ${result})`
    );
  });
}

testIsPalindrome();
