String.prototype.countAll = function(letter) {
  var letterCount = 0;
  for (var i = 0; i < this.length; i++) {
    if (this.charAt(i).toUpperCase()) {
      letterCount++;
    }
  }
  return letterCount;
}