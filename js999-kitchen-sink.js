/* All JS basic stuff on variables, conditions, object, best practices and whatevs.
 * and stuff to make it a big file as possible. A year maybe 6MB? lool.
 * and make it executable
 * "Loving JS" - @nkpgardose
 */

// Variables
var name = 'neil';
var age = 22;
var gender = 'male';
// Strings to numbers
var floorNo = parseInt('15.1'); // 15
var netWorth = parseFloat('8.1E9');
console.log(netWorth);
var sum = (+'1.1') + (+'2.9');
console.log(sum);
// Booleans
var isCoding = true;
var isEating = false;

// Object literals
var userProfile = {
	name: 'Neil',
	age: 22,
	gender: 'male',
	isCoding: true,
	isEating: false
};

console.log('He is ' + userProfile.name + ', ' + userProfile.age + 'yrs old');


// For more info on variable literals and tips: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals