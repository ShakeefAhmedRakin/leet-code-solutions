function containsDuplicate(nums: number[]): boolean {
  const numberSet = new Set();

  for (const num of nums) {
    if (numberSet.has(num)) {
      return true;
    } else {
      numberSet.add(num);
    }
  }
  return false;
}
