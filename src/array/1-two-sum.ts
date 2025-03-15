/* Time: O(n), hashmap */
function twoSum(nums: number[], target: number): number[] {
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (numMap.has(diff)) {
      return [numMap.get(diff), i];
    }

    numMap.set(nums[i], i);
  }
  return [];
}

function test_twoSum() {
  console.log('Result: ', twoSum([3, 3], 7)); // [0, 1]
}

test_twoSum();
