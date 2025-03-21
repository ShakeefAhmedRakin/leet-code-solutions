class Solution {
  encode(strs: string[]): string {
    let res = "";
    for (const str of strs) {
      res += `${str.length}}${str}`;
    }
    return res;
  }

  decode(s: string): string[] {
    const res: string[] = [];
    let i = 0;

    while (i < s.length) {
      const hashIndex = s.indexOf("}", i);
      const length = parseInt(s.slice(i, hashIndex));
      i = hashIndex + 1;
      res.push(s.slice(i, i + length));
      i += length;
    }

    return res;
  }
}
