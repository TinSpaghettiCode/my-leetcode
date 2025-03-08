function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let last = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m--;
    } else {
      nums1[last] = nums2[n - 1];
      n--;
    }
    last--;
  }

  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n--;
    last--;
  }
}

function testMerge() {
  const testCases = [
    {
      nums1: [1, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [2, 5, 6],
      n: 3,
      expected: [1, 2, 2, 3, 5, 6],
    },
    { nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
    { nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] },
  ];

  testCases.forEach(({ nums1, m, nums2, n, expected }, index) => {
    merge(nums1, m, nums2, n);
    console.log(
      `Test ${index + 1}:`,
      JSON.stringify(nums1) === JSON.stringify(expected)
        ? 'PASSED'
        : `FAILED (Expected ${expected}, got ${nums1})`
    );
  });
}

testMerge();
