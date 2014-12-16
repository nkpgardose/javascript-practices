// Singleton - A single unique instance. Restricts instantiation of class to
// single object. Can also be a namespace provider, provide single access point
// for functions.
var coolSingleton = {
  prop1: 'Cool',
  prop2: 'Coolersz',
  method1: function (coolMsg) {
    console.log(coolMsg + 'coooooOol');
  }
};

// Namespace and Singleton
var ASingleton = function () {
  // Private methods and variables
  var privateVar = 'cooler than blue';

  function showPrivate() {
    console.log(privateVar);
  }

  // public methods and variables
  return {
    publicMethod: function () {
      // Can access private variable and methods using public methods.
      showPrivate();
    },
    publicVar: 'everyone can access this coolnesss. tssss. Coool.'
  };
};

var single = ASingleton();
single.publicMethod(); // cooler than blue
console.log(single.publicVar); // everyone can access this coolnesss. tssss. Coool.

/* Saving resource, and initiate singleton when it's needed.
 * Set the variable 'singelton' into sa declaration. To do that,
 * place the instantiation code into another constructor function.
 */

var Singleton = (function () {
  var instantiated;

  function init() {
    // singleton here
    return {
      publicMethod: function () {
        console.log('hello world');
      },
      publicProperties: 'test'
    };
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }

      return instantiated;
    }
  };
})();

// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();

/* Another singleton example
 * Useful if one object is needed to coordinate patterns
 * across the system.
 */
var SingletonTester = (function () {
  // an object containing configuration options for the singleton
  function Singleton(options) {
    this.options = options || {};
    this.name = 'SingletonTester';
    this.pointX = args.pointsX || 6;
    this.pointY = args.pointY || 10;
  }

  // holder
  var instance;
  var _static = {
    name: 'SingletonTester',
    getInstance: function (options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }
      return instance;
    }
  };

  return _static;
})();

var singletonTest = SingletonTester.getInstance({
  pointX: 10000,
  pointY: 10234
});

console.log(singletonTest.pointX); // 10000