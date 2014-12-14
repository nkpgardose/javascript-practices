// Going to use Anonymous Function Expression.

var swap = function(x, y) {
	x ^= y;
	y ^= x;
	x ^= y;
	return [x, y];
}

console.log(swap(5, 10));

// Measuring performance. Using time & timeEnd.
// Using '^=' gives 0.1325.
// Using 'temp' gives 0.145.
// var temp = x;
// x = y;
// y = temp;