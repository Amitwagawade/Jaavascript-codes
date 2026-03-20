// Write a function to convert an angle given in degrees to radians.
// Instructions:
// An angle in degrees can be converted to radians using the formula:
// radians = (pi / 180) * degrees.
// For example, given degrees = 270, converting it to radians results in radians = (pi / 180) * 270 = 4.712.
// Return the converted value.
// Hint: Use the Math.PI built-in constant to replace the value of pi.
// Example:
// For this input degrees = 90, the result should be: 1.571
// Reason: 90 degrees is equivalent to 1.571 radians.

function degreesToRadians(degrees) {
  return (Math.PI / 180) * degrees;
}
