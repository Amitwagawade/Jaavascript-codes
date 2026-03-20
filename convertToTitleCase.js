// Write a function to convert a string to titlecase.
// Instructions:
// In titlecase, the first letter of each word is capitalized, and all other letters are lowercase.
// For example, "learning with programiz" in titlecase is "Learning With Programiz".
// Return the given string in titlecase.
// Example:
// For this input str = "hello world", the result should be: "Hello World"
// Reason: Capitalizing the first letter of each word in "hello world" gives us "Hello World".

function convertToTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
