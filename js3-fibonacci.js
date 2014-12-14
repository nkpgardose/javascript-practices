function fibonacci(index) {
	var first = 0,
		second = 1,
		nextOutput = first;

	for (var i = 0; i < index; i++) {
		first = first + second;
		second = nextOutput;
		nextOutput = first;
	}

	return nextOutput;
}

// Using two variables
/*
function fibonacci(index) {
	var output = [0],
		counter;

	for (counter = 1; counter < index; counter++) {
		output[counter] = (output[counter - 1] || 1) +
			output[Math.max(0, counter - 2)];
	};

	return output[index - 2];
}
*/

console.log(fibonacci(10));