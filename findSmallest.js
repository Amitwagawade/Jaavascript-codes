// Write a function to find the smallest of two numbers.
// Instructions:
// Return the smallest number between given numbers.
// Example:
// For this input num1 = 8, num2 = 3, the result should be: 3
// Reason: 3 is smaller than 8.

function findSmallest(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}
