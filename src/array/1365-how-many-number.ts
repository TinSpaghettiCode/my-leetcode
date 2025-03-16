/* Time: O(n log(n)) */
/* function smallerNumbersThanCurrent(nums: number[]): number[] {
  let result: number[] = [];
  let temp = [...nums].sort((a, b) => a - b);
  console.log(temp);
  let map = new Map<number, number>();

  for (let i = 0; i < temp.length; i++) {
    if (!map.has(temp[i])) {
      map.set(temp[i], i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(map.get(nums[i]));
  }
  return result;
} */

/* Time : O(n), Counting Sort, Use when the range of value was defined */

function smallerNumbersThanCurrent(nums: number[]): number[] {
  let count = new Array(101).fill(0); // 0 <= nums[i] <= 100
  let result: number[] = [];

  for (let num of nums) {
    count[num]++;
  }

  /* prefix sum */
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let num of nums) {
    result.push(num === 0 ? 0 : count[num - 1]);
  }
  return result;
}

function test() {
  console.log('Output:', smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4, 0, 1, 1, 3]
}

test();
