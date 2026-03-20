// Write a function to count the number of parameters received.
// Example:
// For this input args = 6, 23, 69, 22, 9, the result should be: 5
// Reason: The function received 5 parameters: 6, 23, 69, 22, and 9. Therefore, the expected output is 5.
// For this input args = 'j', 'k', the result should be: 2
// Reason: The function received 2 parameters: 'j' and 'k'. Therefore, the expected output is 2.

function countParameters(...args) {
  return args.length;
}
