var rightNow = +new Date();
var endTime = +new Date();
var elapseTime = endTime - rightNow;
console.log(elapseTime);

/*
 * @testImplement - snippet of code we want to test for performance speed.
 * @tesParams 		- parameters needed by the testImplement.
 * @repetitions		- looping the testImplement, higher the reps, the more reliable
 *									speed test.
 */
function SpeedTest(...) {
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repetitions = repetitions || 10000; // Default by 10,000 reps.
	this.average = 0;
}

SpeedTest.prototype = {
	startTest: function() {
		var beginTime, endTime, sumTime = 0;
		for (var i = 0, x = this.repetitions; i < x; i++) {
			beginTime = +new Date();
			this.testImplement(this.testParams);
			endTime = +new Date();
			sumTime += endTime - beginTime;
		}
		this.average = sumTime / x;

		return console.log("Average execution across " +
			x + ": " + this.average);
	}
}