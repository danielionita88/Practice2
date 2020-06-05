// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// The array may contain duplicates.

// Example 1:

// Input: [1,3,5]
// Output: 1
// Example 2:

// Input: [2,2,2,0,1]
// Output: 0

const findMin = (nums) =>{
    let uniq = [...new Set(nums)];
    let left = 0;
    let right = uniq.length - 1;

    while (left < right) {
        let midPoint = Math.floor((left + right) / 2);
        if (uniq[midPoint] > uniq[right]) left = midPoint + 1
        else right = midPoint
    }
    return uniq[right]
};