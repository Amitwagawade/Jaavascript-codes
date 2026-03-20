// Write a function to add the first and last elements of an array.
// Instructions:
// Suppose the given array is [10, 20, 30].
// The first element in the array is 10 and the last element is 30. Adding these would result in 10 + 30 = 40.
// Return the sum of the first and last element of an array.
// Example:
// For this input arr = [1, 2, 3, 4, 5], the result should be: 6
// Reason: Sum of the first element 1 and last element 5 results 6.

function addListEnds(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  return arr[0] + arr[arr.length - 1];
}
