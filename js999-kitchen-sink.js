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

// Expression and operators
/* From MDN.
 * There are two types of EXPRESSION.
 * Those that assign a value to a variable.
 * Those that have a value.
 * Expression of first type sometimes use operator such a '=' to assignment.
 */
var x;
x = 3;
x = 3 + 4;
/* OPERATORS.
 * - Assignment operators
 * - Comparison operators
 * - Arithmetic operators
 * - Bitwise operators
 * - Logical operators
 * - String operators
 * - Special operators
 */

// Assignment
x = 4;
x += 4;
x -= 4;
x *= 4;
x /= 4;
x %= 4;
x <<= 4;
x >>= 4;
x &= 4;
x |= 4;
console.log(x);

// Comparison operators
console.log(5 > 3);
console.log(5 < 3);
console.log(5 <= 3);
console.log(5 >= 3);
console.log('5' == 3);
console.log('5' != 3);
console.log(5 === 3);
console.log(5 !== 3);

// Bitwise operators
var a = 4,
	b; // b is undefined

console.log(a | b);
console.log(b | a);
console.log(a & b);
console.log(b & a);
console.log(b ^ a);
console.log(~a);
b = 3;
console.log(a << b);
console.log(a >> b);
console.log(a >>> b);

// Check out js1-swap-numbers on simple bitwise operator.

var a1 = true && true; // t && t returns true
var a2 = true && false; // t && f returns false
var a3 = false && true; // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = "Cat" && "Dog"; // t && t returns Dog
var a6 = false && "Cat"; // f && t returns false
var a7 = "Cat" && false; // t && f returns false


var o1 = true || true; // t || t returns true
var o2 = false || true; // f || t returns true
var o3 = true || false; // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = "Cat" || "Dog"; // t || t returns Cat
var o6 = false || "Cat"; // f || t returns Cat
var o7 = "Cat" || false; // t || f returns Cat

var n1 = !true; // !t returns false
var n2 = !false; // !f returns true
var n3 = !"Cat"; // !t returns false