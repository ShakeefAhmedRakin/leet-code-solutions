function isValidSudoku(board: string[][]): boolean {
  // ROW VALIDATION
  for (let i = 0; i < 9; i++) {
    const currentRowMap = new Map<string, number>();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (currentRowMap.has(board[i][j])) {
          return false;
        }
        currentRowMap.set(board[i][j], 1);
      }
    }
  }

  // COLUMN VALIDATION
  for (let i = 0; i < 9; i++) {
    const currentColumnMap = new Map<string, number>();
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        if (currentColumnMap.has(board[j][i])) {
          return false;
        }
        currentColumnMap.set(board[j][i], 1);
      }
    }
  }

  // 3X3 GRID VALIDATION
  for (let rowStart = 0; rowStart < 9; rowStart += 3) {
    for (let colStart = 0; colStart < 9; colStart += 3) {
      const currentGridMap = new Map<string, number>();

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const num = board[rowStart + i][colStart + j];
          if (num !== ".") {
            if (currentGridMap.has(num)) {
              return false;
            }
            currentGridMap.set(num, 1);
          }
        }
      }
    }
  }

  return true;
}
