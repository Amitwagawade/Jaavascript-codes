// Write a function to calculate HCF of two numbers.
// Instructions:
// HCF (Highest Common Factor) is the largest number that divides two numbers without leaving a remainder.
// For example, for the numbers 12 and 18:
// Factors of 12: 1, 2, 3, 4, 6, 12
// Factors of 18: 1, 2, 3, 6, 9, 18
// Common factors: 1, 2, 3, 6
// The largest common factor is 6. Therefore, the HCF of 12 and 18 is 6.
// Return the HCF of num1 and num2.
// Example:
// For this input num1 = 40, num2 = 8, the result should be: 8

function hcf(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while (num2) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}
