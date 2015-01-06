/*
 * Insert in an array for adtnl capability.
 */
Array.prototype.removeAll = function(item) {
  var removed = [];
  for (var i = 0, x = this.length; i < x; i++) {
    if (this[i] === item) {
      removed.push(item);
      this.splice(i, 1);
    }
  }
  return removed;
}

Array.prototype.countType = function(type) {
  var count = 0;
  for (var i = 0, x = this.length; i < x; i++) {
    if (this[i] == type) {
      count++;
    }
  }

  return count;
}