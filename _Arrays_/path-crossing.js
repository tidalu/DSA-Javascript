/**
 * @param {string} path
 * @return {boolean}
 */

var isPathCrossing = function (path) {
  let steps = {
    N: [0, 1],
    E: [1, 0],
    S: [0, -1],
    W: [-1, 0],
  };
  let set = [[0, 0]];
  let zeroCoord = [0, 0];
  for (let i of path) {
    let ic = steps[i][0];
    let ij = steps[i][1];
    zeroCoord = [zeroCoord[0] + ic, zeroCoord[1] + ij];
    set.push(zeroCoord);
  }
  set = set.map((x) => x.join(','));
  return set.length != new Set(set).size;
};

var isPathCrossing = function (path) {
  let mp = {};
  let x = 0,
    y = 0;
  let cord = `${x}:${y}`;
  mp[cord] = cord;

  for (let i of path) {
    switch (i) {
      case 'N': {
        y += 1;
        break;
      }
      case 'E': {
        x += 1;
        break;
      }
      case 'W': {
        x -= 1;
        break;
      }
      case 'S': {
        y -= 1;
        break;
      }
      default:
        break;
    }

    cord = `${x}:${y}`;
    if (mp[cord]) {
      return true;
    } else {
      mp[cord] = cord;
    }
  }

  return false;
};
