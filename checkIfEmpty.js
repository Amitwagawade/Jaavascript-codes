// Write a function to check if a string is empty.
// Instructions:
// If the string str is empty, return "Empty". Otherwise, return "Not Empty".
// For example, for the input string "learn with programiz", our expected output would be "Non Empty".
// Note: A string with only spaces is still considered non-empty.
// Example:
// For this input str = "Hello World!", the result should be: "Not Empty"
// Reason: The string "Hello World!" contains characters, so it isn't empty.

function checkIfEmpty(str) {
  if (str === "") {
    return "Empty";
  } else {
    return "Not Empty";
  }
}
