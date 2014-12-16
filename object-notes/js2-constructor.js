/* Constructor is the initial object properties, a values that will differentiate
 * it's type to other object with same class. Prepare the object to use.
 * In example, Two buildings with same blueprint but different main color.
 * @nkpgardose
 */

// Basic
function Car(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;

  this.getInfo = function () {
    return this.model + ' in color ' + this.color;
  }
}

var pickup = new Car('Nissan LE', 2012, 'black');
console.log(pickup.getInfo());

// Using prototype
function Car(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

Car.prototype.getInfo = function () {
  return this.model + ' in color ' + this.color;
}

var pickup = new Car('Nissan LE', 2012, 'black');
console.log(pickup.getInfo());