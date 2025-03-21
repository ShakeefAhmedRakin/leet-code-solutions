function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map<number, number>();

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  return [...frequencyMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}
