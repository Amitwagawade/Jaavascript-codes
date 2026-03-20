/**
 * Checks if a student has passed or failed.
 * Suppose, the pass mark is 40.
 * If the mark is greater than or equal to 40, return "Pass".
 * Otherwise, return "Fail".
 * 
 * @param {number} marks - The marks obtained by the student.
 * @returns {string} - "Pass" or "Fail".
 */
function checkPassOrFail(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}

// Example usage and verification
console.log(checkPassOrFail(45)); // Expected: "Pass"
console.log(checkPassOrFail(39)); // Expected: "Fail"
console.log(checkPassOrFail(40)); // Expected: "Pass"

module.exports = checkPassOrFail;
