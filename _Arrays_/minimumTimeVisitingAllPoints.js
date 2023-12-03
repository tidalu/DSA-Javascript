/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    var count = 0;
    i = 1;
    while(i < points.length) {
      count += Math.max(Math.abs(points[i][0] - points[i-1][0]), Math.abs(points[i][1] - points[i-1][1]))
      i++
    }
  
  return count
};

var points = [[1,1],[3,4],[-1,0]]
console.clear()
console.log(minTimeToVisitAllPoints(points))