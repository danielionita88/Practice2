// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

const combinationSum = (candidates, target) => {
    let answers = [];
    let rec = (nums, currentTotal, currentArr) => {
        for (let i = 0; i < nums.length; i++) {
            if (currentTotal < target) {
                rec(nums.slice(i), currentTotal + nums[i], [...currentArr, nums[i]]);
            }
            else if (currentTotal > target) {
                return;
            }
            else if (currentTotal == target) {
                answers.push(currentArr)
                return;
            }
        }
    }
    rec(candidates, 0, []);
    return answers;
};