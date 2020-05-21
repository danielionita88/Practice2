// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars (each character can only be used once).

// Return the sum of lengths of all good strings in words.

 

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: 
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: 
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

// Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

const countCharacters = (words, chars) =>{
    let result = 0;
    for (const word of words) {
        let availableChars = chars;
        let goodWord = true; 
        for (const letter of word) {
            const index = availableChars.indexOf(letter);
            if (index !== -1) {
                availableChars = availableChars.slice(0, index) + availableChars.slice(index + 1);
            } else {
                goodWord = false;
            }
        }
        
        if (goodWord) {
            result += word.length;
        }
    }
    return result;
};