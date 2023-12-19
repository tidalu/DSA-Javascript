/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let all = [];
  let directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < img.length; i++) {
    let row = [];
    for (let j = 0; j < img[i].length; j++) {
      let count = 1;
      let temp = img[i][j];

      for (let [dx, dy] of directions) {
        const ni = i + dx;
        const nj = j + dy;
        if (ni >= 0 && ni < img.length && nj >= 0 && nj < img[i].length) {
          temp += img[ni][nj];
          count++;
        }
      }
      row.push(Math.floor(temp / count));
    }
    all.push(row);
  }
  return all;
};
