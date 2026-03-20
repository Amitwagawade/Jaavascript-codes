// Write a function to calculate the factorial of a number.
// Instructions:
// The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// For example, the factorial of 3 is 3 * 2 * 1 = 6.
// Return the factorial of the input number.
// Example:
// For this input num = 5, the result should be: 120
// Reason: The factorial of 5 is 5 * 4 * 3 * 2 * 1, which equals 120.

function calculateFactorial(num) {
  if (num === 0 || num === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
