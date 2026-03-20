// Write a function to check if an array is sorted.
// Instructions:
// If the array arr is sorted in ascending order, return "Sorted". Otherwise, return "Not Sorted".
// Example:
// For this input arr[] = [10, 20, 30, 40], the result should be: "Sorted"
// Reason: The array [10, 20, 30, 40] is already sorted in ascending order.

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "Not Sorted";
    }
  }
  return "Sorted";
}
