/* Problems: Time limit exceeded cause of Time O(n^2)*/

// function containsDuplicate(nums: number[]): boolean {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i]) !== i) {
//       return true;
//     }
//   }
//   return false;
// }

/* Solution with Set: Time & Space: O(n)*/

function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    } else {
      seen.add(nums[i]);
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
