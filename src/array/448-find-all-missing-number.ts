/* Time: O(n), Space O(n) */
function findDisappearedNumbers(nums: number[]): number[] {
  let result: number[] = [];

  let largest = nums.length;
  let numSet = new Set(nums);

  for (let i = 1; i <= largest; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }

  return result;
}

function test_448() {
  console.log(findDisappearedNumbers([1, 2])); // [2]
}

/* Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space. */

/* Time: O(n), Space: O(1), Inplace Index Marking */
function findDisappearedNumbersWithoutExtraSpace(nums: number[]): number[] {
  let result: number[] = [];
  // Bước 1: Đánh dấu số đã xuất hiện
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  // Bước 2: Lấy kết quả
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}

function test_448_without_extra_space() {
  console.log(findDisappearedNumbersWithoutExtraSpace([1, 1])); // 2
}

test_448_without_extra_space();
