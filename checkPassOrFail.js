// Write a function to check if a student has passed or failed.
// Instructions:
// Suppose, the pass mark is 40.
// If the mark is greater than or equal to 40, return "Pass". Otherwise, return "Fail".
// Example:
// For this input marks = 45, the result should be: "Pass"
// Reason: Since, 45 is greater than 40, the student has passed.

function checkPassOrFail(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
