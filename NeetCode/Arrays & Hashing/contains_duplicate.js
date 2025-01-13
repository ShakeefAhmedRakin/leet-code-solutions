/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Create a new Map to keep track of the numbers we have seen
  const hashMap = new Map();

  // Iterate through each number in the input array
  for (let num of nums) {
    // Check if the number is already in the map
    if (hashMap.has(num)) {
      // If it is, return true because we found a duplicate
      return true;
    } else {
      // If it is not, add the number to the map
      hashMap.set(num, 1);
    }
  }
  // If we finish the loop without finding any duplicates, return false
  return false;
};

// =====================================================================

// Test cases
caseOne = [1, 2, 3, 1];
caseTwo = [1, 2, 3, 4];
caseThree = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(caseOne));
console.log(containsDuplicate(caseTwo));
console.log(containsDuplicate(caseThree));
