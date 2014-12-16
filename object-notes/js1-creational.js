/* This file will teach you how to deal with the idea of creating new things
 * Dealing with new objects. These are the ways to create new object.
 * @nkpgardose
 */

// Creating a new empty object.
var newObject = {};
var newObject = new Object();
var newObject = Object.create(null);

// NOTE: The 'Object' doesn't not have parameters for the construction process,
// thus it will return a new instantiated object.

/* Key and Value pair produces a property like in JavaScript.
 * and here how can we access them. In 4 ways:
 */
newObject.someKey = 'Hello Jello';
var someVar = newObject.someKey;
// NOTE: Writing and accessing properties respectively.

newObject['someKey'] = 'Hello Rock';
var someVar = newObject['someKey'];
// NOTE: Writing and accessing properties respectively.

// In ECMAScript 5 only compatible approaches.
var defineProp = function (obj, key, value) {
  config.value = value;
  Object.defineProperty(obj, key, config);
}

// Create a new empty object
var someVar = Object.create(null);

defineProp(someVar, 'car', 'Lorem');

// Another way. Object.defineProperties
Object.defineProperties(newObject, {
  'someKey': {
    value: 'Hello World',
    writable: true
  },
  'anotherKey': {
    value: 'Foo Bar',
    writable: false
  }
});