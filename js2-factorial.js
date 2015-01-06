var factorial = function fac(value) {
  return value < 2 ? 1 : value * fac(value - 1);
  // if ((value === 0) || (value === 1))
  //  return 1;
  // else
  //  return (value * fac(value - 1));
}

console.time('factorial time');
console.log(factorial(3));
console.timeEnd('factorial time');
// Measuring performance. Using time & timeEnd
// Using conditional operator. ave. factorial time: 0.06ms
// Using control flow if statement. ave. factorial time: 0.07ms