function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let leftmost = 0;
  let rightmost = s.length - 1;
  while (leftmost < rightmost) {
    if (s[leftmost] !== s[rightmost]) {
      return false;
    }
    leftmost++;
    rightmost--;
  }
  return true;
}
