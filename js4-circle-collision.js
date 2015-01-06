// Assuming that the point is at the center of an circle.
var circle1 = {
    position: [50, 50],
    radius: 25
  },
  circle2 = {
    position: [5, 5],
    radius: 10
  };


var circleCollide = function(srcObj, otherObj) {
  // Using distance formula.
  var totalDistance,
    xDiff = srcObj.position[0] - otherObj.position[0],
    yDiff = srcObj.position[1] - otherObj.position[1];

  totalDistance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
  if (totalDistance < srcObj.radius + otherObj.radius) {
    return true;
  }

  return false;
}

console.log(circleCollide(circle1, circle2));