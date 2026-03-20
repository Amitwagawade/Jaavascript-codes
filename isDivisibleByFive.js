// Write a function to check if a number is divisible by five.
// Instructions:
// If the number is divisible by 5, return "Yes". Otherwise, return "No".
// Example:
// For this input num = 25, the result should be: "Yes"
// Reason: 25 is divisible by 5. So, the output is "Yes".

function isDivisibleByFive(num) {
  if (num % 5 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}
