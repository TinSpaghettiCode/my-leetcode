/* Time: O(n), Space: O(1) */

// function missingNumber(nums: number[]): number {
//   let largest = Math.max(...nums); // O(n)
//   let numSet = new Set(nums);

//   for (let i = 0; i < largest; i++) {
//     if (!numSet.has(i)) return i;
//   }

//   return largest + 1;
// }

/* Gaussian */
function missingNumber(nums: number[]): number {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, cur) => acc + cur, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2
