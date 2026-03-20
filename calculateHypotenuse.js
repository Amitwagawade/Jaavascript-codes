// Write a function to calculate the hypotenuse of a right triangle.
// Instructions:
// The formula to calculate the hypotenuse of a right triangle with sides a and b is:
// hypotenuse = sqrt(a^2 + b^2)
// Given sides a and b, return the hypotenuse of the right triangle.
// Example:
// For this input a = 3, b = 4, the result should be: 5
// Reason: The hypotenuse of a right triangle with sides 3 and 4 is sqrt(3^2 + 4^2) = 5.

function calculateHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
