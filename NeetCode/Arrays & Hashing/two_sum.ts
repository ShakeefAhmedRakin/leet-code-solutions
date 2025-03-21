function twoSum(nums: number[], target: number): number[] {
  const numberMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numberMap.has(complement)) {
      return [numberMap.get(complement)!, i];
    } else {
      numberMap.set(nums[i], i);
    }
  }
  return [];
}
