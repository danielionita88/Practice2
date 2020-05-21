// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

const longestPalindrome = (s) => {

    const isPalindrome = str => {
        let i = 0;
        while (i < str.length - i) {
            if (str.charAt(i) != str.charAt(str.length - i - 1)) {
                return false;
            }
            i++;
        }
        return true;
    };

    let current_longest = 1;
    let longest_str = s.charAt(0);

    for (let i = 1; i < s.length; i++) {
        let str1 = s.substr(i - current_longest, current_longest + 1);
        if (s.charAt(i) == s.charAt(i - current_longest) && isPalindrome(str1)) {
            current_longest++;
            longest_str = str1;
        } else if (s.charAt(i) == s.charAt(i - current_longest - 1)) {
            if (i - (current_longest + 1) >= 0) {
                let str2 = s.substr(i - (current_longest + 1), current_longest + 2);
                if (isPalindrome(str2)) {
                    current_longest += 2;
                    longest_str = str2;
                }
            }
        }
    }
    return longest_str;
};