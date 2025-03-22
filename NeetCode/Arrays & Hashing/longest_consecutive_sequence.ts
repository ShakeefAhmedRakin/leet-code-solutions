function longestConsecutive(nums: number[]): number {
  const numSet = new Set<number>(nums);
  let longestStreak = 0;

  numSet.forEach((num) => {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  });
  return longestStreak;
}
