// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// You may assume no duplicate exists in the array.

// Example 1:

// Input: [3,4,5,1,2] 
// Output: 1
// Example 2:

// Input: [4,5,6,7,0,1,2]
// Output: 0


const findMin = nums => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let midPoint = Math.floor((left + right) / 2);
        if (nums[midPoint] > nums[right]) left = midPoint + 1
        else right = midPoint
    }
    return nums[right]
};