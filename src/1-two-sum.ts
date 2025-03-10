function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  throw new Error('No two sum solution');
}

function testTwoSum() {
  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ];

  testCases.forEach(({ nums, target, expected }, index) => {
    try {
      const result = twoSum(nums, target);
      console.log(
        `Test ${index + 1}:`,
        JSON.stringify(result) === JSON.stringify(expected)
          ? 'PASSED'
          : `FAILED (Expected ${expected}, got ${result})`
      );
    } catch (error) {
      console.error(`Test ${index + 1} FAILED with error: ${error.message}`);
    }
  });
}
testTwoSum();
